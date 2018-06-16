

window.onload = function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvas = document.getElementById('canvas');
  var targetRotation = 0;
			var targetRotationOnMouseDown = 0;
			var mouseX = 0;
			var mouseXOnMouseDown = 0;
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;



  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  var box = {
    rotationY: 0,
    rotationX: 0,
    rotationZ: 0,
    positionY: 0,
    positionX: 0,
    positionZ: 0
  };

  var gui = new dat.GUI();
  gui.add(box, 'rotationY').min(-0.2).max(0.2).step(0.001);
  gui.add(box, 'rotationX').min(-0.2).max(0.2).step(0.001);
  gui.add(box, 'rotationZ').min(-0.2).max(0.2).step(0.001);
  gui.add(box, 'positionY').min(-5).max(5).step(0.001);
  gui.add(box, 'positionX').min(-5).max(5).step(0.001);
  gui.add(box, 'positionZ').min(-5).max(5).step(0.001);

  var renderer = new THREE.WebGLRenderer({
    canvas: canvas
  });
  renderer.setClearColor(0x000000);

  var scene = new THREE.Scene();


  var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
  camera.position.set(0, 300, 1000);
  camera.lookAt(0, 0, 0);
  



  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);


  var geometry = new THREE.BoxBufferGeometry(256, 256, 256);
  var texture = new THREE.TextureLoader().load( "img/2.jpg" );




  var material = new THREE.MeshBasicMaterial({
    map: texture
  });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);


  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);
  //
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  //
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


  function loop() {
    mesh.rotation.y += box.rotationY;
    mesh.rotation.x += box.rotationX;
    mesh.rotation.z += box.rotationZ;
    mesh.position.y += box.positionY;
    mesh.position.x += box.positionX;
    mesh.position.z += box.positionZ;

    //    controls.update();

    scene.rotation.y = mesh.rotation.y += ( targetRotation - mesh.rotation.y ) * 0.05;
    renderer.render(scene, camera);
    requestAnimationFrame(function () {
      loop();
    })
  }
  loop();
}