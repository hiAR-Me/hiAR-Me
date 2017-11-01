'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroAnimations,
  ViroUtils,
  Viro3DObject,
  ViroNode
} from 'react-viro';

import SmokeEmitter from './SmokeEmitter'

export default class MLufo extends Component {
  render() {
    return (
      <ViroNode position={[ 0, 0, 0]} transformBehaviors={'billboardY'}>
        <Viro3DObject source={require('../portal_res/portal_ufo/ufo.obj')}
          resources={[require('../portal_res/portal_ufo/ufo_diffuse2_glow.png'),
            require('../portal_res/portal_ufo/ufo_diffuse.png'),
            require('../portal_res/portal_ufo/ufo_diffuse2.png'),
            require('../portal_res/portal_ufo/ufo_diffuse_glow.png'),
            require('../portal_res/portal_ufo/ufo_normal.png'),
            require('../portal_res/portal_ufo/ufo_spec.png')]}
          position={[ 0, .2, -3]}
          scale={[.05, .05, .05]}
          animation={{
            name:'rotateUFO',
            run: true,
            loop: true
          }}
          type="OBJ"/>
        <SmokeEmitter power={5.0}/>
      </ViroNode>
    )
  }
}

ViroAnimations.registerAnimations({
  rotateUFO:{properties:{rotateY:"+=45"}, duration:1000}
})

var styles = StyleSheet.create({
  helloWorldTextStyle: {
  fontFamily: 'Arial',
  fontSize: 30,
  color: '#ffffff',
  textAlignVertical: 'center',
  textAlign: 'center',
  }
});
