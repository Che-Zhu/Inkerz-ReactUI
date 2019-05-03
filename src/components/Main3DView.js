/*This compoinent is main ThreeJS viewer, displaying the 3D model and
updating any changes to said model */

import React, { Component } from 'react'
import * as THREE from 'three'
import OBJLoader from 'three-obj-loader';
OBJLoader(THREE);


class Main3DView extends Component {
  constructor(props) {
    super(props)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.insertObject = this.insertObject.bind(this)
  }

  componentDidMount() { // HTML DOM
    var previous
    this.previous = previous
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ antialias: true })

    camera.position.z = 4

    renderer.setClearColor('#ffffff')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.mount.appendChild(this.renderer.domElement)

    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  insertObject () {
    this.THREE = THREE;
    let currentComponent = this;
    if (this.props.app_states.chosen_3d_file_to_load !== "Something is wrong if this text displays" && this.props.app_states.chosen_3d_file_to_load !== this.previous) {
      this.previous = this.props.app_states.chosen_3d_file_to_load
      if (this.props.app_states.chosen_3d_file_extension === 'json') {
        var loader = new THREE.ObjectLoader();
        loader.load(this.props.app_states.chosen_3d_file_to_load,
        function(obj){
          currentComponent.scene.add(obj)
        })
      }

      if (this.props.app_states.chosen_3d_file_extension === 'obj') {
        loader = new this.THREE.OBJLoader();
        loader.load(this.props.app_states.chosen_3d_file_to_load,
        function(object){
          currentComponent.scene.add(object )
          currentComponent.renderScene();
        })
      }


    }
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.renderScene()
    this.insertObject()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render(props) {
    return (
      <div>
        <div
          style={{ width: "100%", height: '400px' }}
          ref={(mount) => { this.mount = mount }}
        />
        <div>  {/* These data will be hidden or displayed in colsole for debug purpose, once the preview is fully functioning */}
          <p>Integrate Three.js Viewer TBA!</p>
          <p>Application State Checker (Troubleshooting/Remove in Final!)</p>
          <p>Chosen Engraved Text: {this.props.app_states.chosen_engraved_text}</p>
          <p>Chosen Case Colour: {this.props.app_states.chosen_case_colour}</p>
          <p>Chosen Phone Case: {this.props.app_states.chosen_phone_case}</p>
          <p>Chosen Save 3D Format: {this.props.app_states.chosen_export_3d_format}</p>
          <p>Chosen Load 3D Format: {this.props.app_states.chosen_3d_file_to_load}</p>
          <p>File extension display test: {this.props.app_states.chosen_3d_file_extension}</p>

        </div>

      </div>

    )
  }
}
export default Main3DView