
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';

const diffuse = '#88ff88cc';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          debug // debug mode will show feature points detected and 3D axis
          planeDetection // turn on plane detection
          lightEstimation // turn on light estimation
        >
          <ARKit.Torus
            position={{ x: 0, y: 0.4, z: 0 }}
            shape={{ ringR: 0.06, pipeR: 0.02 }}
            material={{ diffuse }}
          />
        </ARKit>
      </View>
    );
  }
}
AppRegistry.registerComponent('MyFirstARKitApp', () => App);
AppRegistry.registerComponent('hiARme', () => App);
