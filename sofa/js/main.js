if (!Detector.webgl) Detector.addGetWebGLMessage();
var container, stats, controls;
var camera, scene, renderer, light;

var width = window.innerWidth;
var height = window.innerHeight;
var targetRotation = 0;
var targetRotationOnMouseDown = 0;
var mouseX = 0;
var mouseXOnMouseDown = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();


function init() {
  container = document.createElement('div');
  document.body.appendChild(container);

  if (Detector.webgl)
    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
  else
    renderer = new THREE.CanvasRenderer();


  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.set(0, 80, 100);


  THREEx.WindowResize(renderer, camera);
  THREEx.FullScreen.bindKey({
    charCode: 'm'.charCodeAt(0)
  });

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xeeeeee);


  light = new THREE.HemisphereLight(0xffffff, 0x444444);
  light.position.set(0, 1, 0);
  scene.add(light);
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 1, 0);
  scene.add(light);


  // loading manager
  var loadingManager = new THREE.LoadingManager(function () {
    scene.add(sofa);
  });

  // model
  var loader = new THREE.ColladaLoader(loadingManager);
  loader.load('img/Tamila-angle.dae', function (collada) {
    sofa = collada.scene;
  });




  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);
}

//
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
  event.preventDefault();
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('mouseup', onDocumentMouseUp, false);
  document.addEventListener('mouseout', onDocumentMouseOut, false);
  mouseXOnMouseDown = event.clientX - windowHalfX;
  targetRotationOnMouseDown = targetRotation;
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
}

function onDocumentMouseUp(event) {
  document.removeEventListener('mousemove', onDocumentMouseMove, false);
  document.removeEventListener('mouseup', onDocumentMouseUp, false);
  document.removeEventListener('mouseout', onDocumentMouseOut, false);
}

function onDocumentMouseOut(event) {
  document.removeEventListener('mousemove', onDocumentMouseMove, false);
  document.removeEventListener('mouseup', onDocumentMouseUp, false);
  document.removeEventListener('mouseout', onDocumentMouseOut, false);
}

function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
    targetRotationOnMouseDown = targetRotation;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;
  }
}


//
function animate() {
  requestAnimationFrame(animate);
  scene.rotation.y = scene.rotation.y += (targetRotation - scene.rotation.y) * 0.05;
  render();
}

function render() {
  var timer = Date.now() * 0.0001;
  camera.position.x = Math.cos(timer) * 130;
  camera.position.y = 80;
  camera.position.z = Math.sin(timer) * 130;
  camera.lookAt(new THREE.Vector3(0, 5, 0));
  renderer.render(scene, camera);
}