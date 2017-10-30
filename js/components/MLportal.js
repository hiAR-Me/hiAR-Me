// MLportal.js


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

import MLouter from './MLouter'

export default class MLportal extends Component{
  render(){
    return(
      <ViroNode position={[0, 0, 1]}>
        <ViroPortalScene position={[ 0, 0, 0 ]} passable={true}>
          <ViroPortal position={[ 0, 0, 1]} scale={[.5, .5, .5]}>
            <Viro3DObject
              source={require('../portal_res/portal_wood_frame/portal_wood_frame.vrx')}
              resources={[require('../portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),      require('../portal_res/portal_wood_frame/portal_wood_frame_normal.png'), require('../portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
              opacity={.01}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require("../portal_res/360_space.jpg")} />
            <MLouter />
        </ViroPortalScene>
      </ViroNode>
    )
  }
}
