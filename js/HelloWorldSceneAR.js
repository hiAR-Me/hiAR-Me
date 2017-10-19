'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroVideo,
  ViroAnimations
} from 'react-viro';

var HelloWorldSceneAR = React.createClass({
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },

  render: function() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "Hello World!"})}}>
        <ViroText
          text={this.state.text}
          scale={[.5, .5, .5]}
          position={[0, .5, -1]}
          style={styles.helloWorldTextStyle}
          />
        <ViroVideo
            source={require('./res/hire-me.mp4')}
            onClick={this._onClick}
            loop={true}
            position={[0,0,-1]}
            scale={[.25, .25, 0]}
            animation={{name: 'growAndShrink',
            run: true,
            loop: true,
            delay: 0  //delay before starting loop
            }}
         />
      </ViroARScene>
    );
  },

  _onClick(source) {
      this.setState({text: "Clicked"});
    },

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

module.exports = HelloWorldSceneAR;
