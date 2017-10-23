'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroVideo,
  ViroAnimations,
  ViroSceneNavigator,
  ViroScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroDirectionalLight,
  Text,
  ViroButton, 
  ViroImage,
  ViroMaterials,
  ViroNode
} from 'react-viro';

ViroMaterials.createMaterials({
  basketball: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('../portal_res/ChadTextures/orangecolor.jpg'),
  }
});

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
      <ViroPortalScene id= 'CYScene' passable={true}                 dragType="FixedDistance" onDrag={()=>{}}>

      <Viro360Image 
      source={require("../portal_res/Chad360Scene/tiles.jpg")} 
      // rotation={[0, 45, 0]}
      // format="RGBA8"
      />

      <Viro3DObject 
      source={require('../portal_res/Chad3DObjects/IronMan.obj')}
      resources={[require('../portal_res/Chad3DObjResources/IronMan.mtl'),
      require('../portal_res/Chad3DObjResources/ironman.png')]}
      scale={[0.01, 0.04, 0.01]}
      position={[0, 0, .3]}
      type="OBJ" 
      />

          <ViroImage
          source={require("../portal_res/ChadButton/click_me.png")}
          position={[0,0,0]}
          height={.5}
          width={1}
          transformBehaviors={["billboardY"]}
          onTap={this._onButtonTap}
          />

          <ViroText
          text="Chad's World"
          textAlign="center"
          textAlignVertical="top"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#000000"
          width={6} height={6}
          style={{fontFamily:"Arial", fontSize:20, color:"#0000FF"}}
          position={[0,.2,0]}
          />



        <ViroPortal position={[0, -1, -1]} scale={[.3, .3, .3]}>

          <Viro3DObject source={require('../portal_res/portal_archway/portal_archway.vrx')}
              resources={[require('../portal_res/portal_archway/portal_archway_diffuse.png'),
              require('../portal_res/portal_archway/portal_archway_normal.png'),
              require('../portal_res/portal_archway/portal_archway_specular.png')]}
            type="VRX"
          />  

        </ViroPortal>
      </ViroPortalScene>
    );
  }
}

ViroAnimations.registerAnimations({
  grow: {properties:{scaleX:1.0, scaleY:1.0, scaleZ:0,
                            opacity: 1.0},
                easing:"Bounce",
                duration: 1000},
  rotate:{properties:{rotateZ:"+=45"}, duration:1000},
  shrink: {properties:{scaleX:0.5, scaleY:0.5, scaleZ:0,
                            opacity: 1.0},
                easing:"Bounce",
                duration: 1000},
  growAndShrink: [["grow", "shrink"]]
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
