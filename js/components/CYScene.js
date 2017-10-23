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
} from 'react-viro';


var CYScene = React.createClass({
  // getInitialState() {
  //   return {
  //     text : "Initializing AR..."
  //   };
  // },

  render: function() {
    return (
      <ViroPortalScene id= 'CYScene' passable={true} dragType="FixedDistance" onDrag={()=>{}}>
        {/* <ViroPortal position={[-1, 0, -1]} scale={[.1, .1, .1]}>
          <Viro3DObject source={require('../portal_res/portal_archway/portal_archway.vrx')}
            resources={[require('../portal_res/portal_archway/portal_archway_diffuse.png'),
                        require('../portal_res/portal_archway/portal_archway_normal.png'),
                        require('../portal_res/portal_archway/portal_archway_specular.png')]}
            type="VRX"/>
        </ViroPortal>
        <Viro360Video source={require("../portal_res/360_surf.mp4")} /> */}
      </ViroPortalScene>
    );
  },
  //
  // _onClick(source) {
  //     this.setState({text: "Clicked"});
  //   },

});

ViroAnimations.registerAnimations({
  // define the name
  grow: {properties:{scaleX:1.0, scaleY:1.0, scaleZ:0,
                            opacity: 1.0},
                easing:"Bounce",
                duration: 1000},
  rotate:{properties:{rotateZ:"+=45"}, duration:1000},
  shrink: {properties:{scaleX:0.5, scaleY:0.5, scaleZ:0,
                            opacity: 1.0},
                easing:"Bounce",
                duration: 1000},
  growAndShrink: [["grow", "shrink"]]  //array of animated movements
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
  fontFamily: 'Arial',
  fontSize: 30,
  color: '#ffffff',
  textAlignVertical: 'center',
  textAlign: 'center',
  },
});

module.exports = CYScene;
