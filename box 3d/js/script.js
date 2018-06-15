window.onload = function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvas = document.getElementById('canvas');
  
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
  
  var renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setClearColor(0x000000);
  
  var scene = new THREE.Scene();
  
  var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
  camera.position.set(100, 0, 1000);
  
  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);
  
  var texture = new THREE.TextureLoader().load('https://www.filterforge.com/filters/9452-v2.jpg');
  var geometry = new THREE.BoxBufferGeometry(256, 256, 256);
 
  
  
  
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true, map: texture});
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  
  function loop() {
    mesh.rotation.y += box.rotationY;
    mesh.rotation.x += box.rotationX;
    mesh.rotation.z += box.rotationZ;
    mesh.position.y += box.positionY;
    mesh.position.x += box.positionX;
    mesh.position.z += box.positionZ;
  
    renderer.render(scene, camera);
    requestAnimationFrame(function() {loop();
    })
  }
  loop();
}