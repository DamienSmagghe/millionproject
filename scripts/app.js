"use strict";

// //ANIMATED BAR
var elem = document.querySelector(".myBar");
var numberSupporters = 485;
var absolutePool = 3786;

var percentagePool = absolutePool / 100;
document.querySelector(".amount").innerHTML = "$" + absolutePool;
document.querySelector(".supportersAmount").innerHTML = numberSupporters;
document.querySelector(".percentage").innerHTML = percentagePool + "%";

window.addEventListener("scroll", function () {
    if (elementInViewport(elem)) {
        elem.style.transform = "scaleX(" + percentagePool / 100 + ")";
    }
});
window.addEventListener("load", function () {
    if (elementInViewport(elem)) {
        elem.style.transform = "scaleX(" + percentagePool / 100 + ")";
    }
});

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
}

// CARROUSEL
$(window).on("load", function () {
    $("#flexisel").flexisel({
        visibleItems: 4,
        itemsToScroll: 4,
        animationSpeed: 400,
        infinite: true,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }
    }, {
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 2,
                itemsToScroll: 2
            }
        }
    });
});

//FULLPAGE
window.addEventListener('load', function () {
    if (window.innerWidth > 960) {
        var scrollStatus = {
            wheeling: false,
            functionCall: false
        };
    }
    var scrollTimer = false;
    window.addEventListener('wheel', function (e) {
        if (window.innerWidth > 960) {
            scrollStatus.wheeling = true;
            if (!scrollStatus.functionCall) {
                if (e.deltaY > 0) {
                    scrollDown();
                }
                if (e.deltaY < 0) {
                    scrollUp();
                }
                scrollStatus.functionCall = true;
            }
            window.clearInterval(scrollTimer);
            scrollTimer = window.setTimeout(function () {
                scrollStatus.wheeling = false;
                scrollStatus.functionCall = false;
            }, 50);
        }
    });
});

var scrollDown = function scrollDown() {
    $('body,html').animate({
        scrollTop: window.innerHeight
    }, 800);
};
var scrollUp = function scrollUp() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
};

document.querySelector('.landing__arrow').addEventListener('click', function () {
    scrollDown();
});

//NEWSLETTER
var isMail = void 0;
$(document).ready(function () {

    var regex = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' + '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' + '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

    $('.section__newsletter input').on('keyup', function (e) {
        isMail = regex.test($(this).val());
        if (isMail) {
            document.querySelector('.section__newsletter .button').disabled = false;
        }
        $('.section__newsletter input').toggleClass('success', regex.test($(this).val()));
    });
});

//3D

// var sceneContainer = document.querySelector('.landing__product__container');
// // const canvasHeight = objectContainer.offsetHeight
// // const canvasWidth = objectContainer.offsetWidth
// // const windowPercent = 100

// // const model = new Element3d(canvasWidth, canvasHeight, windowPercent, "mtl", '../assets/images/cadre.obj', '../assets/images/cadre.mtl', 0.1, objectContainer, 180, {
// //     x: 60,
// //     y: 0,
// //     z: -10
// // }, {
// //     x: 0,
// //     y: -20,
// //     z: -3
// // })


// // window.addEventListener('resize', () => {
// //     model.resize()
// // })
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, sceneContainer.offsetWidth / sceneContainer.offsetHeight, 0.1, 1000);
// camera.position.z = 2.7;
// camera.position.x = 1.9;
// camera.lookAt(new THREE.Vector3(0, 0, 0));

// var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.gammaOutput = true;
// renderer.setPixelRatio(window.devicePixelRatio);
// var maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// // controls.minDistance = 50
// // controls.maxDistance = 50
// controls.rotateStart = Math.PI;
// controls.enablePan = false;
// controls.enableZoom = false;
// controls.enableDamping = true;
// controls.minPolarAngle = Math.PI / 2;
// controls.maxPolarAngle = Math.PI / 2;
// controls.position0.set(0, 90, 0);
// // controls.dampingFactor = 0.07;
// // controls.rotateSpeed = 0.5;

// renderer.setSize(sceneContainer.offsetWidth, sceneContainer.offsetHeight);

// sceneContainer.appendChild(renderer.domElement);

// var gltfLoader = new THREE.GLTFLoader();

// gltfLoader.load(
// // resource URL
// '../assets/images/gltf/scene.gltf',
// // called when the resource is loaded
// function (gltf) {

//     gltf.scene.traverse(function (mesh) {
//         if (mesh instanceof THREE.Mesh) {
//             mesh.castShadow = true;
//             mesh.receiveShadow = true;
//             //mesh.rotation.setFromVector3(new THREE.Vector3( Math.PI / 2, 0, 0));
//         }
//         if (mesh instanceof THREE.Mesh && mesh.material.map !== null) {
//             mesh.material.map.anisotropy = maxAnisotropy;
//         }
//     });
//     gltf.scene.scale.set(0.05, 0.05, 0.05);
//     scene.add(gltf.scene);

//     gltf.scene.position.x = 0;
//     gltf.scene.position.y = -1.8;
//     gltf.scene.position.z = 1.2;
//     myobject = gltf.scene;
// },
// // called while loading is progressing
// function (xhr) {
//     console.log(xhr.loaded / xhr.total * 100 + '% loaded');
// },
// // called when loading has errors
// function (error) {

//     console.log('An error happened');
// });

// var light = new THREE.AmbientLight(0xffffff);
// scene.add(light);
// var light2 = new THREE.DirectionalLight(0xffffff, 1);
// light2.position.set = camera.position;
// light2.target.position.set(0, -1.8, 1.2);
// light2.castShadow = true;
// scene.add(light2);

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }
// animate();

// window.addEventListener('resize', resize);
// function resize() {

//     controls.update();
//     //keep aspect ratio of camera
//     camera.aspect = sceneContainer.offsetWidth / sceneContainer.offsetHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(sceneContainer.offsetWidth, sceneContainer.offsetHeight);
// }