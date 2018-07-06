if (!Detector.webgl) Detector.addGetWebGLMessage();
var container, stats, controls;
var camera, scene, renderer, light;
var video, videoImage, videoImageContext, videoTexture;

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
  light.position.set(0, 0, 50);
//  light.target.position.set(0, 0, 0);
  scene.add(light);
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 0, 50);
  light.target.position.set(0, 0, 0);
  scene.add(light);
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(-100, -30, 50);
  light.target.position.set(0, 0, 0);
  scene.add(light);
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(100, -30, 50);
  light.target.position.set(0, 0, 0);
  scene.add(light);
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(-150, 50, 150);
  light.target.position.set(0, 0, 0);
  scene.add(light);
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(150, 50, 150);
  light.target.position.set(0, 0, 0);
  scene.add(light);

  // model
  new THREE.MTLLoader()
    .setPath('img/')
    .load('Device_gameboy.mtl', function (materials) {
      materials.preload();
      new THREE.OBJLoader()
        .setMaterials(materials)
        .setPath('img/')
        .load('Device_gameboy.obj', function (object) {
          object.position.set(0, 0, 0);
          object.rotation.set(-Math.PI/18, 0, 0);
          scene.add(object);
        });
    });


  // video
  video = document.createElement('video');
  video.src = "img/PS-ScreenLoop.mov";
  video.autoplay = true;
  video.loop = true;
  video.load(); // must call after setting/changing source
  video.play();

  videoImage = document.createElement('canvas');
  videoImage.width = 720;
  videoImage.height = 720;

  videoImageContext = videoImage.getContext('2d');
  // background color if no video present
  videoImageContext.fillStyle = '#000000';
  videoImageContext.fillRect(0, 0, videoImage.width, videoImage.height);

  videoTexture = new THREE.Texture(videoImage);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;

  var movieMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture,
    overdraw: true
  });

  var movieGeometry = new THREE.PlaneGeometry(18.5, 17, 4, 4);
  var movieScreen = new THREE.Mesh(movieGeometry, movieMaterial);
  movieScreen.position.set(0, 16, 4);
  movieScreen.rotation.set(-Math.PI/18, 0, 0);
  scene.add(movieScreen);


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
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    videoImageContext.drawImage(video, 0, 0);
    if (videoTexture)
      videoTexture.needsUpdate = true;
  }

  var timer = Date.now() * 0.0001;
  camera.position.x = Math.cos(timer) * 130;
  camera.position.y = 50;
  camera.position.z = Math.sin(timer) * 130;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  renderer.render(scene, camera);
}