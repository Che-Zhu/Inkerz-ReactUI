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

var width = 500;
var height = 400;

var CaseColor = '#ff0000';
var renderSize = 10;
var rotY = 0;
var rotX = 0;
var phoneCaseTitle = "iPhone X";

var myModel = '1';
var RenderInfo;

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
    };
  }

  componentDidMount() {
    let { scene } = this.refs;
    this.setState({ scene });
  }

  render() {
    CaseColor = this.props.chosenCaseColor;
    renderSize = this.props.chosenCaseSize;
    rotY = this.props.chosenRotationX;
    rotX = this.props.chosenRotationY;

    if (phoneCaseTitle !== this.props.chosenPhoneCase) {
      //alert(phoneCaseTitle + " " + this.props.chosenPhoneCase)
      this.setState(this.initialState);
      this.componentDidMount();
    }
    phoneCaseTitle = this.props.chosenPhoneCase;

    RenderInfo = "Rendering " + phoneCaseTitle + " Model"

    //change model based on title
    if (phoneCaseTitle === "iPhone-X") {
      myModel = iPhoneXModel
    } else if (phoneCaseTitle === "iPhone-8-Plus") {
      myModel = iPhone8Model
    } else if (phoneCaseTitle === "iPhone-7") {
      myModel = iPhone7Model
    } else if (phoneCaseTitle === "iPad-9.7") {
      myModel = iPad97Model
    } else if (phoneCaseTitle === "Galaxy-S5") {
      myModel = GalaxyS5Model
    } else if (phoneCaseTitle === "Galaxy-S10") {
      myModel = GalaxyS10Model
    } else if (phoneCaseTitle === "Pixel2XL") {
      myModel = Pixel2XLModel
    } else {
      //if there is no matching model use iphone x model
      myModel = phoneCaseTitle
      if (myModel !== 'iPhone X') {
        RenderInfo = "Using uploaded Model"
      } else {
        RenderInfo = "Model Not Found Rendering iPhone X Model"
        myModel = iPhoneXModel
      }

    }

    return (
      <div>
        <React3
          mainCamera="camera"
          antialias
          shadowMapEnabled
          width={width}
          height={height}
          alpha={true}
        >
          <scene ref="scene">
            <perspectiveCamera
              key={`perspectiveCamera`}
              name="camera"
              fov={renderSize}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={this.state.cameraPosition}
              lookAt={new THREE.Vector3(0, 0, 0)}
            />
            <group>
              <spotLight
                key={`Light 1`}
                color={CaseColor}
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
                color={CaseColor}
                position={new THREE.Vector3(0, 500, 100)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.5}
              />

              <spotLight
                key={`Light 3`}
                color={CaseColor}
                position={new THREE.Vector3(0, 100, 2000)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.35}
              />

              <spotLight
                key={`Light 4`}
                color={CaseColor}
                position={new THREE.Vector3(-500, 0, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.1}
              />

              <spotLight
                key={`Light 5`}
                color={CaseColor}
                position={new THREE.Vector3(500, 0, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.1}
              />

              <spotLight
                key={`Light 6`}
                color={CaseColor}
                position={new THREE.Vector3(-500, 450, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.375}
              />

              <spotLight
                key={`Light 7`}
                color={CaseColor}
                position={new THREE.Vector3(500, 450, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.375}
              />
            </group>

            <group name="exampleGroup" rotation={new THREE.Euler(rotY, rotX, 0)}
              //change key when model changes so that it gets re-rendered
              key={phoneCaseTitle}>
              <ObjectModel
                name="exampleObject"
                //this is the model we are rendering
                model={myModel}
                scene={this.state.scene}
                group="exampleGroup"
              />
            </group>
          </scene>
        </React3>
        <p>{RenderInfo}</p>
      </div>
    );
  }
}

export default DemoScene;
