import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//model animation

document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    camera.position.x -= 1;
  } else if (e.keyCode === 39) {
    camera.position.x += 1;
  } else if (e.keyCode === 38) {
    camera.position.z -= 1;
  } else if (e.keyCode === 40) {
    camera.position.z += 1;
  } else if (e.keyCode === 32) {
    camera.position.y -= 1;
  } else if (e.keyCode === 13) {
    camera.position.y += 1;
  }
};

const scene = new THREE.Scene();
//camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);
camera.position.y = 1000;
camera.position.z = 0;
camera.position.x = 0;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("#bg"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

//Controls

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

torus.rotateX(-250);

torus.position.z = +450;
torus.position.setY(+13);
torus.position.setX(-600);

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
saturn.position.z = +450;
saturn.position.setY(+13);
saturn.position.setX(-600);

//venus

const venusTexture = new THREE.TextureLoader().load("venus.jpg");

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
  })
);

scene.add(venus);

venus.position.z = +350;

//mercury

const mercuryTexture = new THREE.TextureLoader().load("mercury.png");

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
  })
);

scene.add(mercury);

mercury.position.z = 200;
mercury.position.setX(-100);

//mars

const marsTexture = new THREE.TextureLoader().load("mars.jpg");

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
  })
);

scene.add(mars);

mars.position.z = +150;

mars.position.setX(230);

//jupiter

const jupiterTexture = new THREE.TextureLoader().load("jupiter.jpg");

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
  })
);

scene.add(jupiter);

jupiter.position.z = +500;
jupiter.position.setY(+17);
jupiter.position.setX(+100);

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

//satalite arm1
const playerTexture = new THREE.TextureLoader().load("solarpanel.jpg");

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 3, 0),
  new THREE.MeshPhongMaterial({
    map: playerTexture,
  })
);
player.rotateX(-500);
player.rotateZ(-900.05);
player.position.set(2.5, 0, 0);
player.castShadow = true;
player.receiveShadow = true;

let player2 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
player2.setFromObject(player);

scene.add(player);

//sat arm2

const satarmTexture = new THREE.TextureLoader().load("solarpanel.jpg");

const satarm = new THREE.Mesh(
  new THREE.BoxGeometry(1, 3, 0),
  new THREE.MeshPhongMaterial({
    map: satarmTexture,
  })
);
satarm.rotateX(-500);
satarm.rotateZ(-900.05);
satarm.position.set(-2.5, 0, 0);
satarm.castShadow = true;
satarm.receiveShadow = true;

scene.add(satarm);

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

//ball

const ball1Texture = new THREE.TextureLoader().load("deathstar.jpg");

const ball1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshPhongMaterial({ map: ball1Texture })
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

const ringTexture = new THREE.TextureLoader().load("saturn.jpg");

const ring = new THREE.Mesh(
  new THREE.TorusGeometry(100, 0.1, 2, 100),
  new THREE.MeshPhongMaterial({ map: ringTexture })
);

ring.position.z = 200;
ring.castShadow = true;
ring.receiveShadow = true;

ring.rotateX(-300);

scene.add(ring);

//ring 2

const ring2Texture = new THREE.TextureLoader().load("saturn.jpg");

const ring2 = new THREE.Mesh(
  new THREE.TorusGeometry(150, 0.1, 2, 100),
  new THREE.MeshPhongMaterial({ map: ring2Texture })
);

ring2.position.z = 200;
ring2.castShadow = true;
ring2.receiveShadow = true;

ring2.rotateX(-300);

scene.add(ring2);

//ring 4

const ring4Texture = new THREE.TextureLoader().load("saturn.jpg");

const ring4 = new THREE.Mesh(
  new THREE.TorusGeometry(192, 0.1, 2, 100),
  new THREE.MeshPhongMaterial({ map: ring4Texture })
);

ring4.position.setY(+5);
ring4.position.z = 200;
ring4.castShadow = true;
ring4.receiveShadow = true;

ring4.rotateX(-300);

scene.add(ring4);

//ring3

const ring3Texture = new THREE.TextureLoader().load("saturn.jpg");

const ring3 = new THREE.Mesh(
  new THREE.TorusGeometry(235.5, 0.1, 2, 100),
  new THREE.MeshPhongMaterial({ map: ring3Texture })
);

ring3.position.z = 200;
ring3.castShadow = true;
ring3.receiveShadow = true;

ring3.rotateX(-300);

scene.add(ring3);

//ring 5

const ring5Texture = new THREE.TextureLoader().load("saturn.jpg");

const ring5 = new THREE.Mesh(
  new THREE.TorusGeometry(317, 0.1, 2, 100),
  new THREE.MeshPhongMaterial({ map: ring5Texture })
);

ring5.position.setY(+20);
ring5.position.z = 200;

ring5.castShadow = true;
ring5.receiveShadow = true;

ring5.rotateX(-300);

scene.add(ring5);

//ring 6

const ring6Texture = new THREE.TextureLoader().load("saturn.jpg");

const ring6 = new THREE.Mesh(
  new THREE.TorusGeometry(650, 0.1, 2, 100),
  new THREE.MeshPhongMaterial({ map: ring6Texture })
);

ring6.position.setY(+20);
ring6.position.z = 200;

ring6.castShadow = true;
ring6.receiveShadow = true;

ring6.rotateX(-300);

scene.add(ring6);
