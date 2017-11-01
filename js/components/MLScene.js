'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroUtils,
  ViroNode
} from 'react-viro';

import MLufo from './MLufo'
import MLportal from './MLportal'

export default class MLScene extends Component {
  render() {
    return (
      <ViroNode position={[0, .5, -4]}>
        <MLufo />
        <MLportal />
      </ViroNode>
    )
  }
}
