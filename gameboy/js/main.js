var windowHalfX = $(window).width();
var windowHalfY = $(window).height();
var video, videoImage, videoImageContext, videoTexture;


var targetRotation = 0,
  targetRotationOnMouseDown = 0,
  mouseXOnMouseDown = 0;

var dis = [];

function init() {

  // scene
 
  var scene = new THREE.Scene();
  var scene2 = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  scene.add(new THREE.AmbientLight(0x999999));

  // camera

  var camera = new THREE.PerspectiveCamera(45, $(window).width() / $(window).height(), 0.1, 1000);

  scene.add(camera);

  // renderer

  var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialiasing: true
  });
  renderer.setSize($(window).width() * 2, $(window).height() * 2)
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMapSoft = true;
  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  // Elements
  


  // LIGHTS

  hemiLight = new THREE.HemisphereLight(0xffffff, 0x333333, 1);
  hemiLight.color.setHSL(0, 0, 0);
  hemiLight.groundColor.setHSL(1, 1, 1);
  hemiLight.position.set(80, 150, 0);
  scene.add(hemiLight);

  hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 1);
  scene.add(hemiLightHelper);

  //

  dirLight = new THREE.DirectionalLight(0xffffff, .75);
  dirLight.color.setHSL(1, 1, 1);
  dirLight.position.set(80, 10, 0);
  dirLight.position.multiplyScalar(30);
  scene2.add(dirLight);

  dirLight = new THREE.DirectionalLight(0xffffff, .1);
  dirLight.color.setHSL(1, 1, 1);
  dirLight.position.set(0, 20, 30);
  dirLight.position.multiplyScalar(30);
  scene2.add(dirLight);

  dirLight = new THREE.DirectionalLight(0xffffff, .1);
  dirLight.color.setHSL(1, 1, 1);
  dirLight.position.set(0, 20, -30);
  dirLight.position.multiplyScalar(30);
  scene2.add(dirLight);

  dirLight.castShadow = true;

  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;

  var d = 10;

  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;
  //
  dirLight.shadow.camera.far = 3500;
  dirLight.shadow.bias = -0.00001;



  // MODEL

  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath('img/')
  mtlLoader.load('Device_gameboy.mtl', function (materials) {
    materials.preload();
    for (key in materials.materials) {
      if (materials.materials[key].map != null) {
        materials.materials[key].color.r = 0.75;
        materials.materials[key].color.g = 0.75;
        materials.materials[key].color.b = 0.75;
      }
    }
    materials.materials.magFilter = THREE.NearestFilter;
    materials.materials.minFilter = THREE.LinearFilter;
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('img/')
    objLoader.load('Device_gameboy.obj', function (object) {
      object.position.y = 0;
      object.position.z = 0;
      object.rotation.set(0, Math.PI / 2, 0);
      scene2.add(object);
    });
  })
  scene.add(scene2);


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

  var movieGeometry = new THREE.PlaneGeometry(18.6, 16, 4, 4);
  var movieScreen = new THREE.Mesh(movieGeometry, movieMaterial);
  movieScreen.position.set(6.5, 15.2, 0.2);
  movieScreen.rotation.set(0, Math.PI / 2, 0);
  scene2.add(movieScreen);
  scene.add(scene2);

  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);
  window.addEventListener('resize', onWindowResize, false);

  $('#block').append(renderer.domElement)

  function onWindowResize() {
    windowHalfX = $(window).width() / 2;
    windowHalfY = $(window).height() / 2;

    camera.aspect = $(window).width() / $(window).height();
    camera.updateProjectionMatrix();

    renderer.setSize($(window).width() * 2, $(window).height() * 2);
    renderer.render(scene, camera);
  }

  function onDocumentMouseDown(e) {
    e.preventDefault();
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    document.addEventListener('mouseout', onDocumentMouseOut, false);
    mouseXOnMouseDown = e.clientX - windowHalfX;
    targetRotationOnMouseDown = targetRotation;
  }

  function onDocumentMouseMove(e) {
    mouseX = e.clientX - windowHalfX;
    targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
  }

  function onDocumentMouseUp(e) {
    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    document.removeEventListener('mouseup', onDocumentMouseUp, false);
    document.removeEventListener('mouseout', onDocumentMouseOut, false);
  }

  function onDocumentMouseOut(e) {
    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    document.removeEventListener('mouseup', onDocumentMouseUp, false);
    document.removeEventListener('mouseout', onDocumentMouseOut, false);
  }

  function onDocumentTouchStart(e) {
    if (e.touches.length === 1) {
      e.preventDefault();
      mouseXOnMouseDown = e.touches[0].pageX - windowHalfX;
      targetRotationOnMouseDown = targetRotation;
    }
  }

  function onDocumentTouchMove(e) {
    if (e.touches.length === 1) {
      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;
    }
  }

  render();

  function render() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      videoImageContext.drawImage(video, 0, 0);
      if (videoTexture)
        videoTexture.needsUpdate = true;
    }
    
    scene2.rotation.y = scene2.rotation.y += (targetRotation - scene2.rotation.y) * 0.05;
    var timer = Date.now() * 0.0001;
    camera.position.x = Math.cos(timer) * 130;
    camera.position.y = 50;
    camera.position.z = Math.sin(timer) * 130;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
}

window.onload = init;