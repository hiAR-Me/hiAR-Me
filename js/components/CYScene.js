'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene, ViroText, ViroVideo, ViroAnimations, ViroSceneNavigator, ViroScene, ViroAmbientLight, Viro360Video, Viro360Image, ViroUtils, ViroPortal, ViroPortalScene, Viro3DObject, ViroDirectionalLight, Text, ViroButton, ViroImage, ViroMaterials, ViroNode
} from 'react-viro';

// ViroMaterials.createMaterials({
//   basketball: {
//     shininess: 2.0,
//     lightingModel: "Lambert",
//     diffuseTexture: require('../portal_res/ChadTextures/orangecolor.jpg'),
//   }
// });

class CYScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  _onButtonTap() {
    return (
    console.log("BUTTON WAS CLICKED!!!!")
    )
}

  render(){
    return (
      <ViroPortalScene id= 'CYScene' passable={true}                  dragType="FixedDistance" onDrag={()=>{}}>

      <ViroPortal position={[0, .5, 3]} scale={[.3, .3, .3]}>
      
              <Viro3DObject source={require('../portal_res/portal_archway/portal_archway.vrx')}
                    resources={[require('../portal_res/portal_archway/portal_archway_diffuse.png'),
                    require('../portal_res/portal_archway/portal_archway_normal.png'),
                    require('../portal_res/portal_archway/portal_archway_specular.png')]}
                  type="VRX"
              />  
      
      </ViroPortal>

      <Viro360Image 
        source={require("../portal_res/Chad360Scene/tiles.jpg")} 
      />

      <ViroNode
        position={[0,0,0]}
      >

      <ViroImage
          source={require("../portal_res/Chad2DImages/kobe.png")}
          animation={{
            name:'getBiggerAndSmaller',
            run:true, 
            loop: true, 
            delay: 0
          }}           
          position={[2,.03,-2]}
          height={.3}
          width={.7}
          transformBehaviors={["billboardY"]}
      />

      <ViroImage
          source={require("../portal_res/Chad2DImages/basketballhoop.png")}     
          position={[2,-.8,-2]}
          height={.8}
          width={.3}
          transformBehaviors={["billboardY"]}

      />


      <ViroImage
      source={require("../portal_res/Chad2DImages/viewcode.png")}     
      position={[1.5,-.8,-2]}
      height={.8}
      width={.8}
      transformBehaviors={["billboardY"]}

      />

      </ViroNode>

      <ViroNode
      position={[-6,0,3]}      
      >



      <ViroImage
      source={require("../portal_res/Chad2DImages/findoutmore.png")}     
      position={[1.5,-.8,-2]}
      height={.8}
      width={.8}
      transformBehaviors={["billboardY"]}
      />




      </ViroNode>

      </ViroPortalScene>
    );
  }
}

ViroAnimations.registerAnimations({
  getBigger: {
    properties: {
      scaleX: 1.0,
      scaleY: 1.0,
      scaleZ: 0,
      opacity: 1.0},
    easing: "Bounce",
    duration: 2000},
  getSmaller: {
    properties: {
      scaleX: 0.5,
      scaleY: 0.5,
      scaleZ: 0,
      opacity: 1.0},
    easing: "EaseIn",
    duration: 2000},
  getBiggerAndSmaller: [
    ["getBigger", "getSmaller"]],

  spinBall: {
    properties: {
      rotateY: 360,
      opacity: 1},
      easing: "Linear",
      duration: 2000}
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
  fontFamily: 'Arial',
  fontSize: 30,
  color: '#000000',
  textAlignVertical: 'center',
  textAlign: 'center',
  },
});

module.exports = CYScene;

// <Viro360Image 
// source={require("../portal_res/KohHong01.jpg")} 
// rotation={[0, 45, 0]}
// format="RGBA8"
// />

// <ViroDirectionalLight
// color="#ffffff"
// direction={[0, -1, 0]}
// />

// <Viro3DObject 
// source={require('../portal_res/Chad3DObjects/mr_krab.obj')}
// resources={[require('../portal_res/Chad3DObjResources/mr_krab.mtl'),
// require('../portal_res/Chad3DObjResources/mrkrabs_d.png')]}
// scale={[0.1, 0.1, 0.01]}
// position={[0, 0, .3]}
// type="OBJ" 
// />

// <Viro3DObject 
// // source={require('../portal_res/Chad3DObjects/basketball.obj')}
// // materials={["basketball"]}        
// // animation={{
// //   name: 'spinBall',
// //   run: true,
// //   loop: true,
// //   delay: 0
// // }}
// // scale={[0.005, 0.005, 0.005]}
// // position={[1, 0, -1]}
// // type="OBJ" 
// />

// <ViroText
// text="Chad's World"
// textAlign="center"
// textAlignVertical="top"
// textLineBreakMode="justify"
// textClipMode="clipToBounds"
// color="#000000"
// width={6} height={6}
// style={{fontFamily:"Arial", fontSize:20, color:"#0000FF"}}
// position={[0,1,0]}
// />
