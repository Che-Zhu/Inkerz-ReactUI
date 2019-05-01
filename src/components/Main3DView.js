/*This compoinent is main ThreeJS viewer, displaying the 3D model and
updating any changes to said model */

import React, { Component } from 'react'
import * as THREE from 'three'


class Main3DView extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() { // HTML DOM
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

    renderer.setClearColor('#000000')
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

        </div>

      </div>

    )
  }
}
export default Main3DView