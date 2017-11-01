'use strict';

import React, {Component} from 'react';
import Tutorial from "./Tutorial"

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroNode,
  ViroButton,
  ViroImage,
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
  ViroParticleEmitter,
  Viro3DObject
} from 'react-viro';

class ChrisResume extends Component {

  render() {
    return (
      <ViroNode position={[0,0,2]}
        transformBehaviors={["billboardY"]}>
          <ViroImage height={1} width={.8} position={[0, 0, -.05]}
            placeholderSource={require("../res/ChrisResume.png")}
            source={require("../res/ChrisResume.png")}/>
      </ViroNode>
    );
  }
};

module.exports = ChrisResume;
