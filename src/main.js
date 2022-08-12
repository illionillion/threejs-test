"use strict"

import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, DirectionalLight, MeshPhongMaterial, } from "../node_modules/three/build/three.module.js";
// import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"

console.log('Hello ThreeJS');

// シーンの準備
const scene = new Scene()

// カメラの準備
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// レンダラーの準備
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 立方体の準備
const geometry = new BoxGeometry() // ジオメトリ
// const material = new MeshBasicMaterial({color: 0x00ff00}) // マテリアル
const material = new MeshPhongMaterial({color: 0x00ff00}) // マテリアル
const cube = new Mesh(geometry, material) // キューブ
scene.add(cube)
camera.position.z = 5


// コントローラーの準備
// const controls = new OrbitControls(camera, document.body)

// アニメーションループの開始
function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    requestAnimationFrame(animate) // 再帰ループ
    // controls.update() // ← コントロールする
    renderer.render(scene, camera)
}
animate();

// ライトの準備
const directionalLight = new DirectionalLight('#aaaaff', 1)
directionalLight.position.set(0, 10, 10)
scene.add(directionalLight)
