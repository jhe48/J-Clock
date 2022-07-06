import './style.css'

// import controls
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import ThreeJS and instantiate objects. 
import * as THREE from 'three';



// Scene Object
const scene1 = new THREE.Scene();



// Camera Object (FOV, Aspect Ratio, Far)
// 40-45 or less FOV will cause less distortion.
const camera1 = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 100 );



// Renderer Object
const render1 = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#clock')
});

render1.setPixelRatio( window.devicePixelRatio );
render1.setSize( window.innerWidth, window.innerHeight );

camera1.position.setZ(30);





// Sun
const sunBumps = new THREE.TextureLoader().load('Images/Sun Bumps.jpeg');
const sunSkin = new THREE.TextureLoader().load('Images/Sun Skin.jpeg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial( { 
    map: sunSkin,
    normalMap: sunBumps
   } )
);

sun.position.x = -13;
sun.position.y = 0;


// Moon 
const moonBumps = new THREE.TextureLoader().load('Images/Moon Bumps.jpeg');
const moonSkin = new THREE.TextureLoader().load('Images/Moon Skin.jpeg');

// Mesh takes shape/skeleton & texture/skin
// Our moon will also include normal map/ physical features
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial( { 
    map: moonSkin,
    normalMap: moonBumps
   } )
);

moon.position.x = 13;
moon.position.y = 0;



// Temporary Clock Body
const clockSkin = new THREE.TextureLoader().load('Images/clock.png');

const clock = new THREE.Mesh(
  new THREE.CircleGeometry(4, 32, 0, 6.28),
  new THREE.MeshStandardMaterial({
    map: clockSkin
  })
);

const clockFrame = new THREE.Mesh(
  new THREE.CircleGeometry(4.8, 32, 0, 6.28),
  new THREE.MeshStandardMaterial({
    color: 0x040e12
  })
);
clockFrame.position.z = -0.5; //Behind OG clock.




// Lights & Light-helpers
const flashlight = new THREE.PointLight(0xffffff);
flashlight.position.set(1, 1, 1);

const spotlight = new THREE.AmbientLight(0xffffff);

// Extra Options
//const notInvis = new THREE.PointLightHelper(flashlight);
//const controls = new OrbitControls(camera1, render1.domElement );





//const bgImage = new THREE.TextureLoader().load('');






// Create scene w/ all objects.
scene1.add(
  sun,
  moon,
  flashlight,
  spotlight,
  clock,
  clockFrame
);


// Function to generate Stars
function genStars() {
  const starSkel = new THREE.SphereGeometry(0.01, 5, 5);
  const starSkin = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const stars = new THREE.Mesh( starSkel, starSkin );

  const [x, y] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread (100));
  stars.position.set(x, y, -1);
  scene1.add(stars);
}
// Stars made with Love <3
Array(100).fill().forEach(genStars);




// Function to continually render scenes. 
function animate() {

  requestAnimationFrame( animate );

  // Sun & Moon objects indefinitely rotate.
  sun.rotation.y += 0.001;
  moon.rotation.y += 0.003;

  // Scenery change for time of day.
  const day = new Date();
  const timeOfDay = day.getHours();

  // Background of background color change
  const bgbg = document.querySelector('body');

  // Font color change
  const title = document.querySelector('p');

  if (timeOfDay < 12) {
    // Morning Background if 0-11:00am.
    scene1.background = new THREE.Color( 0xFAC358 );
    bgbg.style.background = '#FAC358';
    title.style.color = '#E930C1';

  } else if (timeOfDay >= 12 && timeOfDay < 17){
    // Sunset Background if 12pm.
    scene1.background = new THREE.Color( 0xF5961F );
    bgbg.style.background = '#F5961F';
    title.style.color = '#B02227';

  } else if (timeOfDay >= 17){
    // Night Background if 5:00pm.
    scene1.background = new THREE.Color( 0x392033 );
    bgbg.style.background = '#392033';
    title.style.color = '#A0FC24';
  }

  // For more detailed view of the scene.
  // controls.update();

  render1.render( scene1, camera1 );

}
animate();