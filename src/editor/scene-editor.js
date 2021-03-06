import React, { Component } from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class SceneEditor extends Component {
  componentDidMount() {
    const width = this.anchor.clientWidth;
    const height = this.anchor.clientHeight;
    this.scene = new THREE.Scene();
    this.testObject = new THREE.Object3D();

    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor("#e5e5e5");
    this.renderer.setSize(width, height);
    this.anchor.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    this.camera.position.z = 20;
    this.camera.position.y = 5;

    //Camera Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.renderScene();
    //start animation
    this.start();
  }

  createMaterial(uniforms) {
    const material = new THREE.ShaderMaterial( {
      uniforms: {},
      vertexShader: document.getElementById( 'vertexShader' ).textContent,
      fragmentShader: document.getElementById( 'fragmentShader' ).textContent
    });
    return material;
  }

  swapObjectInScene(objectType, uniforms, attributes) {
    this.testObject.clear();
    if (objectType === 'point') {

    } else if (objectType === 'sphere') {

    } else if (objectType === 'quad') {

    } else if (objectType === 'cube') {

    }
  }

  componentWillUnmount() {
    this.stop();
    this.anchor.removeChild(this.renderer.domElement);
  }

  resize() {
    const width = this.anchor.clientWidth;
    const height = this.anchor.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

  // https://codesandbox.io/s/brave-violet-l9r01k94pm?from-embed=&file=/src/ThreeScene.js:0-4028
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.controls.update();
    this.resize();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: '100%', height: "100%" }}
        ref={anchor => {
          this.anchor = anchor;
        }}
      />
    );
  }
}
export default SceneEditor;
