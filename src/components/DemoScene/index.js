/* This component renders case 3D object

It uses number of modules for Threejs to make it ewasier to
integrate React and ThrreJS, namely react-three-renderer as
for rendering and react-three-renderer-objects for object loading

*/

import * as THREE from "three";
import React from "react";
import React3 from "react-three-renderer";
import ObjectModel from 'react-three-renderer-objects';


class DemoScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraPosition: new THREE.Vector3(0, 300, 750),
      groupRotation: new THREE.Euler(0, 0, 0),
      scene: {},
      width: 500,
      height: 400,
      RenderInfo: "",
      assets_path: "assets/"
    }
    // this.objectLoadLogic = this.objectLoadLogic.bind()
  }

  objectLoadLogic() {
    // if we detect an object as string, with substring base64, then load it as is
    if (this.props.chosenPhoneCase.indexOf("base64") > 0) {
      return this.props.chosenPhoneCase
    }
    // otherwise we need to load it from file system, 
    // including the full asset path under public/assets folder
    else {
      return (this.state.assets_path + this.props.chosenPhoneCase + ".obj")
    }
  }

  objectLabelDisplayLogic() {
    // if we detect an object as string, with substring base64, mark it with
    // laber of customer loaded
    if (this.props.chosenPhoneCase.indexOf("base64") > 0) {
      return "Customer"
    }
    // otherwise we need to load it from file system, 
    // including the full asset path under public/assets folder
    // label it as such
    else {
      return this.props.chosenPhoneCase
    }
  }

  /* when component mounts (renders), we set thescene and track the 
  window resize */
  componentDidMount() {
    let { scene } = this.refs;
    this.setState({ scene });
    //detect window resiez and perform resize function

    this.resize();

    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {

    if (window.innerWidth < 640) {
      //adjust render size
      this.setState({ width: window.innerWidth * 0.7 });
      this.setState({ height: 300 });
    } else {
      //adjust render size
      this.setState({ width: window.innerWidth - 350 });
      this.setState({ height: 400 });
    }
  }

  // This is the react rendering the 3D object
  render() {
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
              fov={parseInt(this.props.chosenCaseSize, 10)}
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

            <group name="objGroup" rotation={new THREE.Euler(this.props.chosenRotationX, this.props.chosenRotationY, 0)}
              //change key when model changes so that it gets re-rendered
              key={this.props.chosenPhoneCase}>
              <ObjectModel
                name="exampleObject"
                //this is the model we are rendering
                model={this.objectLoadLogic()}
                scene={this.state.scene}
                group="objGroup"
              />
              {/* {console.log("model is:", this.objectLoadLogic())} */}
            </group>
          </scene>
        </React3>
        <div className="renderDescription">
          <p>{"Rendering " + this.objectLabelDisplayLogic() + " Model"}</p>
        </div>
      </div>
    );
  }
}

export default DemoScene;
