import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    camera.position.x += 1;
  } else if (e.keyCode === 39) {
    camera.position.x -= 1;
  } else if (e.keyCode === 38) {
    camera.position.z += 1;
  } else if (e.keyCode === 40) {
    camera.position.z -= 1;
  } else if (e.keyCode === 32) {
    camera.position.y -= 1;
  } else if (e.keyCode === 13) {
    camera.position.y += 1;
  }
};

const scene = new THREE.Scene();
//camera
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

document.body.appendChild(renderer.domElement);

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

const controls = new OrbitControls(camera, renderer.domElement);
scene.add(torus);
torus.position.z = -70;
torus.position.setY(+20);
torus.rotateX(-250);

//Star
function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 34, 34);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(1000));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(5000).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

//animate

//earth

const earthTexture = new THREE.TextureLoader().load("earth.jpg");

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),

  new THREE.MeshStandardMaterial({ map: earthTexture })
);

scene.add(earth);

earth.position.setY(+10);
earth.position.z = +8;

function earthAnimate() {
  requestAnimationFrame(earthAnimate);

  earth.rotation.y += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

earthAnimate();

//Moon
const moonTexture = new THREE.TextureLoader().load("moon.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
  })
);

scene.add(moon);

moon.position.z = -500;
moon.position.setY(-10);

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
saturn.position.setY(+20);

//venus

const venusTexture = new THREE.TextureLoader().load("venus.jpg");

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
  })
);

scene.add(venus);

venus.position.z = 40;
venus.position.setY(+5);

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
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
  })
);

scene.add(mars);

mars.position.z = -20;
mars.position.setY(+13);

//jupiter

const jupiterTexture = new THREE.TextureLoader().load("jupiter.jpg");

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
  })
);

scene.add(jupiter);

jupiter.position.z = -45;
jupiter.position.setY(+17);

//Uranus

const uranusTexture = new THREE.TextureLoader().load("uranus.jpg");

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
  })
);

scene.add(uranus);

uranus.position.z = -110;
uranus.position.setY(+25);

//neptune

const neptuneTexture = new THREE.TextureLoader().load("neptune.jpg");

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
  })
);

scene.add(neptune);

neptune.position.z = -180;
neptune.position.setY(+30);

//pluto

const plutoTexture = new THREE.TextureLoader().load("pluto.jpg");

const pluto = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: plutoTexture,
  })
);

scene.add(pluto);

pluto.position.z = -250;
pluto.position.setY(+35);

//player
const playerTexture = new THREE.TextureLoader().load("rocket.jpg");

const player = new THREE.Mesh(
  new THREE.CylinderBufferGeometry(1, 3, 50, 200),
  new THREE.MeshStandardMaterial({
    map: playerTexture,
  })
);

scene.add(player);

player.position.z = -300;
player.position.setY(+35);
player.rotateX(-250);
