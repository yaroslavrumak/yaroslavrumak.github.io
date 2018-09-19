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
light.position.set(5, 3, 5);
scene.add(light);

//var loader = new THREE.TextureLoader();
////loader.setCrossOrigin('http://blog.mastermaps.com/2013/09/creating-webgl-earth-with-threejs.html')
//loader.src = 'http://2.bp.blogspot.com/-Jfw4jY6vBWM/UkbwZhdKxuI/AAAAAAAAK94/QTmtnuDFlC8/s640/2_no_clouds_4k.jpg', 
//  function (texture) {
//  var geometry = new THREE.SphereBufferGeometry(0.4, 32, 32);
//  var material = new THREE.MeshPhongMaterial({
//    map: texture,
//    bumpMap: new THREE.TextureLoader().load('img/2.jpg'),
//    bumpScale: 0.005,
//    specularMap: new THREE.TextureLoader().load('img/4.png'),
//    specular: new THREE.Color('grey')
//  });
//  var earth = new THREE.Mesh(geometry, material);
//  scene.add(earth);
//});
//
//var loader = new THREE.TextureLoader();
//loader.crossOrigin = 'use-credentials';
//loader.load('img/3.jpg', function (texture2) {
//  var geometry2 = new THREE.SphereBufferGeometry(0.41, 32, 32);
//  var material2 = new THREE.MeshPhongMaterial({
//    alphaMap: texture2,
//    transparent: true
//  });
//  var clouds = new THREE.Mesh(geometry2, material2);
//  scene.add(clouds);
//});




var mearth = new THREE.TextureLoader().load('img/1.jpg');
var bearth = new THREE.TextureLoader().load('img/2.jpg');
var cearth = new THREE.TextureLoader().load('img/3.jpg');
var searth = new THREE.TextureLoader().load('img/4.png');

var geo1 = new THREE.SphereGeometry(0.4, 32, 32);
var mat1 = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load('img/1.jpg'),
  bumpMap: bearth,
  bumpScale: 0.005
});
var earth = new THREE.Mesh(geo1, mat1);
scene.add(earth);


var geo2 = new THREE.SphereGeometry(0.41, 32, 32);
var mat2 = new THREE.MeshPhongMaterial({
    alphaMap: cearth,
    transparent: true
  });
var clouds = new THREE.Mesh(geo2, mat2);
scene.add(clouds);


//renderer.render(scene, camera);
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  windowHalfX = window.innerWidth * 1.35 / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth * 1.35 / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth * 1.35, window.innerHeight);
  renderer.render(scene, camera);
}

var controls = new THREE.TrackballControls(camera);

render();

function render() {
  controls.update();
  requestAnimationFrame(render);
  earth.rotation.y += 0.0005;
  clouds.rotation.y += 0.0008;
  renderer.render(scene, camera);
};
