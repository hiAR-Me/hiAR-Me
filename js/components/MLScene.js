'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARPlane,
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
  ViroNode,
  ViroSpotLight
} from 'react-viro';

import SmokeEmitter from './SmokeEmitter'

export default class MLScene extends Component {
  // getInitialState() {
  //   return {
  //     text : "Initializing AR..."
  //   };
  // },

  render() {
    return (
  <ViroNode position={[ 0, 1, -5]} scale={[ 1, 1, 1]} dragType='FixedDistance' onDrag={()=>{}} transformBehaviors='billboard'>
    <ViroARPlane minHeight={.5} minWidth={.5} >
      <ViroPortalScene position={[ 0, 1, -5 ]} passable={true}>
            <ViroPortal position={[ 0, -1, 1]} scale={[.5, .5, .5]}>
            <Viro3DObject source={require('../portal_res/portal_ufo/ufo.obj')}
              resources={[require('../portal_res/portal_ufo/ufo_diffuse2_glow.png'),
                           require('../portal_res/portal_ufo/ufo_diffuse.png'),
                           require('../portal_res/portal_ufo/ufo_diffuse2.png'),
                           require('../portal_res/portal_ufo/ufo_diffuse_glow.png'),
                           require('../portal_res/portal_ufo/ufo_normal.png'),
                           require('../portal_res/portal_ufo/ufo_spec.png')]}
              position={[ 0, 1, -5]}
              scale={[.3, .3, .3]}
              animation={{
                name:'rotate',
                run: true,
                loop: true
              }}
              type="OBJ"/>
            </ViroPortal>
          <Viro360Image source={require("../portal_res/360_space.jpg")} />
      </ViroPortalScene>
      <SmokeEmitter run={true} location={[0, 1, -5]} power={5.0}/>
    </ViroARPlane>
  </ViroNode>
    )
  }
  //
  // _onClick(source) {
  //     this.setState({text: "Clicked"});
  //   },

}

ViroAnimations.registerAnimations({
  // define the name
  // grow: {properties:{scaleX:1.0, scaleY:1.0, scaleZ:0,
  //                           opacity: 1.0},
  //               easing:"Bounce",
  //               duration: 1000},
  rotate:{properties:{rotateY:"+=90"}, duration:1000},
  // shrink: {properties:{scaleX:0.5, scaleY:0.5, scaleZ:0,
  //                           opacity: 1.0},
  //               easing:"Bounce",
  //               duration: 1000},
  // growAndShrink: [["grow", "shrink"]]  //array of animated movements
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
  fontFamily: 'Arial',
  fontSize: 30,
  color: '#ffffff',
  textAlignVertical: 'center',
  textAlign: 'center',
  }
});
