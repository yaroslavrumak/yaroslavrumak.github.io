var WIDTH = window.innerWidth,
  HEIGHT = window.innerHeight,

  mouseX = 0,
  mouseY = 0,

  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2,

  camera, scene, scene1, mesh, group, renderer, controls, container, stats;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;
var mouseX = 0;
var mouseXOnMouseDown = 0;

init();

function init() {
  var container;

  container = document.getElementById('globe-container');
  document.body.appendChild(container);
  
  scene = new THREE.Scene();
  scene2 = new THREE.Scene();
  scene.background = new THREE.Color(0x000000)

  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 1000);
  camera.position.z = 1.5;

  scene.add(camera);

  renderer = new THREE.WebGLRenderer({
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);
}

scene.add(new THREE.AmbientLight(0x333333));

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,3,5);
scene.add(light);

//var mearth = new THREE.TextureLoader().load('img/1.jpg');
var bearth = new THREE.TextureLoader().load('img/2.jpg');
//var cearth = new THREE.TextureLoader().load('img/3.jpg');
//var searth = new THREE.TextureLoader().load('img/4.png');

var geo1 = new THREE.SphereGeometry(0.5, 32, 32);
var mat1 = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('img/1.jpg'),
    bumpMap: bearth,
    bumpScale: 0.005});
var earth = new THREE.Mesh(geo1, mat1);
scene2.add(earth);


var geo2 = new THREE.SphereGeometry(0.503, 32, 32);
var mat2 = new THREE.MeshPhongMaterial();
var clouds = new THREE.Mesh(geo2, mat2);
scene2.add(clouds);

scene.add(scene2);

renderer.render(scene, camera);
//window.addEventListener('resize', onWindowResize, false);
//
//function onWindowResize() {
//  windowHalfX = window.innerWidth * 1.35 / 2;
//  windowHalfY = window.innerHeight / 2;
//  camera.aspect = window.innerWidth * 1.35 / window.innerHeight;
//  camera.updateProjectionMatrix();
//  renderer.setSize(window.innerWidth * 1.35, window.innerHeight);
//  renderer.render(scene, camera);
//}
//
//var controls = new THREE.TrackballControls(camera);
//
//render();
//
//function render() {
//  controls.update();
//  requestAnimationFrame(render);
//  earth.rotation.y += 0.0005;
//  clouds.rotation.x += 0.0005;
//  renderer.render(scene, camera);
//};


