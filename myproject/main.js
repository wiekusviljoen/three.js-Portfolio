import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    ball1.position.x += 1;
  } else if (e.keyCode === 39) {
    ball1.position.x -= 1;
  } else if (e.keyCode === 38) {
    ball1.position.z += 1;
  } else if (e.keyCode === 40) {
    ball1.position.z -= 1;
  } else if (e.keyCode === 32) {
    ball1.position.y -= 1;
  } else if (e.keyCode === 13) {
    ball1.position.y += 1;
  }
};

const scene = new THREE.Scene();
//camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  20000
);
camera.position.set(3, 5, 3);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("#bg"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

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
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshPhongMaterial({
    map: playerTexture,
  })
);

player.position.set(3, 0, 0);
player.castShadow = true;
player.receiveShadow = true;

let player2 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
player2.setFromObject(player);

scene.add(player);

//playermain

const player3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshPhongMaterial({ color: 0x0000ff })
);

player3.position.set(-3, 0, 0);
player3.castShadow = true;
player3.receiveShadow = true;

let player4 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
player4.setFromObject(player3);

scene.add(player3);

//ball
const ball1 = new THREE.Mesh(
  new THREE.SphereGeometry(1),
  new THREE.MeshPhongMaterial({ color: 0xff1493 })
);

ball1.position.set(0, 0, 0);
ball1.castShadow = true;
ball1.receiveShadow = true;

let ball1BB = new THREE.Sphere(ball1.position, 1);

scene.add(ball1);

// animate balls and blocks

animate();

function animate() {
  player4.copy(player3.geometry.boundingBox).applyMatrix4(player3.matrixWorld);

  checkCollisions();

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

//check collisions

function checkCollisions() {
  if (player4.intersectsBox(player2)) {
    animation1();
  } else {
    player.material.opacity = 1.0;
  }

  if (player4.intersectsSphere(ball1BB)) {
    animation2();
  } else {
    ball1.material.opacity = 1.0;
  }

  if (player4.containsBox(player2)) {
    player3.scale.y = 3;
  } else {
    player3.scale.y = 1;
  }
}

//animation block and balls

function animation1() {
  player.material.transparent = true;
  player.material.opacity = 0.5;
  player.material.color = new THREE.Color(Math.random() * 0xfffffff);
}

function animation2() {
  ball1.material.transparent = true;
  ball1.material.opacity = 0.5;
  ball1.material.color = new THREE.Color(Math.random() * 0xfffffff);
}
