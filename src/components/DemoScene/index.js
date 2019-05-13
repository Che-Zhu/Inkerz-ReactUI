import * as THREE from "three";

import React from "react";
import React3 from "react-three-renderer";
import ObjectModel from 'react-three-renderer-objects';

//import models
import iPhoneXModel from "../../assets/iPhone X.obj";
import iPhone8Model from "../../assets/iPhone 8 Plus.obj";
import iPhone7Model from "../../assets/iPhone 7.obj";
import iPad97Model from "../../assets/iPad 9.7.obj";
import GalaxyS5Model from "../../assets/Galaxy S5.obj";
import GalaxyS10Model from "../../assets/Galaxy S10.obj";
import Pixel2XLModel from "..//../assets/Pixel 2XL.obj";

// var myModel = '1';

class DemoScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      cameraPosition: new THREE.Vector3(0, 300, 750),
      groupRotation: new THREE.Euler(0, 0, 0),
      scene: {},
      width: 500,
      height: 400,
      RenderInfo: "",
      myModel: this.props.chosenPhoneCase,
    };
  }

  componentDidMount() {
    let { scene } = this.refs;
    this.setState({ scene });
  }

  render() {

    //change model based on title
    if (this.props.chosenPhoneCase === "iPhone-X") {
      this.state.myModel = iPhoneXModel
    } else if (this.props.chosenPhoneCase === "iPhone-8-Plus") {
      this.state.myModel = iPhone8Model
    } else if (this.props.chosenPhoneCase === "iPhone-7") {
      this.state.myModel = iPhone7Model
    } else if (this.props.chosenPhoneCase === "iPad-9.7") {
      this.state.myModel = iPad97Model
    } else if (this.props.chosenPhoneCase === "Galaxy-S5") {
      this.state.myModel = GalaxyS5Model
    } else if (this.props.chosenPhoneCase === "Galaxy-S10") {
      this.state.myModel = GalaxyS10Model
    } else if (this.props.chosenPhoneCase === "Pixel2XL") {
      this.state.myModel = Pixel2XLModel
    } else {
      //if there is no matching model use iphone x model
      // console.log("Model is", this.props.chosenPhoneCase)
      this.state.myModel = this.props.chosenPhoneCase // <<<<<<<<PROBLEM PROBLEM<<<<<<<<<<
      if (this.state.myModel !== 'iPhone X') {
        this.state.RenderInfo = "Using uploaded Model"
      } else {
        this.state.RenderInfo = "Model Not Found Rendering iPhone X Model"
        this.state.myModel = iPhoneXModel
      }

    }

    return (
      <div>
        <React3
          mainCamera="camera"
          antialias
          shadowMapEnabled
          width={this.state.width}
          height={this.state.height}
          alpha={true}
        >
          <scene ref="scene">
            <perspectiveCamera
              key={`perspectiveCamera`}
              name="camera"
              fov={parseInt(this.props.chosenCaseSize)}
              aspect={this.state.width / this.state.height}
              near={0.1}
              far={1000}
              position={this.state.cameraPosition}
              lookAt={new THREE.Vector3(0, 0, 0)}
            />
            <group>
              <spotLight
                key={`Light 1`}
                color={this.props.chosenCaseColor}
                position={new THREE.Vector3(0, 300, 0)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                castShadow
                penumbra={2}
                intensity={0.2}
                shadowMapWidth={10240}
                shadowMapHeight={10240}
              />

              <directionalLight
                key={`Light 2`}
                color={this.props.chosenCaseColor}
                position={new THREE.Vector3(0, 500, 100)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.5}
              />

              <spotLight
                key={`Light 3`}
                color={this.props.chosenCaseColor}
                position={new THREE.Vector3(0, 100, 2000)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.35}
              />

              <spotLight
                key={`Light 4`}
                color={this.props.chosenCaseColor}
                position={new THREE.Vector3(-500, 0, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.1}
              />

              <spotLight
                key={`Light 5`}
                color={this.props.chosenCaseColor}
                position={new THREE.Vector3(500, 0, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.1}
              />

              <spotLight
                key={`Light 6`}
                color={this.props.chosenCaseColor}
                position={new THREE.Vector3(-500, 450, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.375}
              />

              <spotLight
                key={`Light 7`}
                color={this.props.chosenCaseColor}
                position={new THREE.Vector3(500, 450, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.375}
              />
            </group>

            <group name="exampleGroup" rotation={new THREE.Euler(this.props.chosenRotationX, this.props.chosenRotationY, 0)}
              //change key when model changes so that it gets re-rendered
              key={this.props.chosenPhoneCase}>
              <ObjectModel
                name="exampleObject"
                //this is the model we are rendering
                model={this.state.myModel}
                scene={this.state.scene}
                group="exampleGroup"
              />
            </group>
          </scene>
        </React3>
        <p>{"Rendering " + this.state.RenderInfo + " Model"}</p>
      </div>
    );
  }
}

export default DemoScene;
