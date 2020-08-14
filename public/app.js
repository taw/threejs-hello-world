let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function rand(min,max) {
  return min + (max-min) * Math.random();
}

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

let cubes = [];
for (let i=0; i<10; i++) {
  let geometry = new THREE.BoxGeometry();
  let color = Math.floor(Math.random() * 0x1000000);
  let material = new THREE.MeshToonMaterial({ color });
  let cube = new THREE.Mesh(geometry, material);
  cube.position.x = rand(-3, 3) ;
  cube.position.y = rand(-3, 3);
  cube.position.z = rand(-3, 3);
  cube.drx = rand(-0.02, 0.02);
  cube.dry = rand(-0.02, 0.02);
  cube.drz = rand(-0.02, 0.02);
  cubes.push(cube);
  scene.add(cube);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  for(let cube of cubes) {
    cube.rotation.x += cube.drx;
    cube.rotation.y += cube.dry;
    cube.rotation.z += cube.drz;
  }
}
animate();
