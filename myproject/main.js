import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

//Saturn ring

const geometry = new THREE.TorusGeometry(10, 3, 2, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x812654999991,
});

const torus = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);
scene.add(torus);
torus.position.z = -70;
torus.position.setX(-0);
torus.rotateX(-250);

//Star
function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 34, 34);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(4000).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  earth.rotation.y += 0.01;
  earth.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}
document.body.onscroll = moveCamera;

//animate
function animate() {
  requestAnimationFrame(animate);

  //torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();

//earth

const earthTexture = new THREE.TextureLoader().load("earth.jpg");

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),

  new THREE.MeshStandardMaterial({ map: earthTexture })
);

scene.add(earth);

//Moon
const moonTexture = new THREE.TextureLoader().load("moon.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
  })
);

scene.add(moon);

moon.position.z = 25;
moon.position.setX(-0);

//sun
const sunTexture = new THREE.TextureLoader().load("sun.jpg");

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32, 32),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
  })
);

scene.add(sun);

sun.position.z = 200;
sun.position.setX(-0);

//saturn
const saturnTexture = new THREE.TextureLoader().load("texture sat.jpg");

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
  })
);

scene.add(saturn);

saturn.position.z = -70;
saturn.position.setX(-0);

//venus

const venusTexture = new THREE.TextureLoader().load("venus.jpg");

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
  })
);

scene.add(venus);

venus.position.z = 50;
venus.position.setX(-0);

//mercury

const mercuryTexture = new THREE.TextureLoader().load("mercury.png");

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
  })
);

scene.add(mercury);

mercury.position.z = 80;
mercury.position.setX(-0);

//mars

const marsTexture = new THREE.TextureLoader().load("mars.jpg");

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
  })
);

scene.add(mars);

mars.position.z = -20;
mars.position.setX(-0);

//jupiter

const jupiterTexture = new THREE.TextureLoader().load("jupiter.jpg");

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
  })
);

scene.add(jupiter);

jupiter.position.z = -40;
jupiter.position.setX(-0);
