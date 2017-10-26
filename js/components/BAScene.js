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

class BAScene extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      dialog: [
        "Welcome! Click the RED Button",
        "It Worked!  Try Again!",
        "Click the BLUE button to see how I am made!",
        "I made a click counter to help with my dialogue",
        "Based on the counter number I change what I say",
        "The blue button only works at specified counter numbers",
        "Try the blue button now!"
      ],
      screenshot: "no image",
      visibleBtn: false,
      visibleScreenshot1: false,
      visibleScreenshot2: false
    }
  }
  // getInitialState() {
  //   return {
  //     text : "Initializing AR..."
  //   };
  // },


  handleClick = (source) => {
    const { dialog, counter } = this.state;
    let newCounter = (counter === (dialog.length -1)) ? 0 : counter +1
    this.setState({
      counter: newCounter
    })
    if (counter == 1) {
      this.setState({visibleBtn: true})
      }
    }


// you need a blue button and more dialog
// dialog should indicate when the blue button makes changes.
  handleBlueClick = (source) => {
    const { counter } = this.state;
    if (counter == (2 || 3 || 4)) {
      this.setState({
        visibleScreenshot1: true,
        visibleScreenshot2: false,
      })
    } else if (counter == (5 || 6)){
      this.setState({
        visibleScreenshot1: false,
        visibleScreenshot2: true
      })
    } else if (counter == (0 || 1)){
      this.setState({
        visibleScreenshot1: false,
        visibleScreenshot2: false
      })
    }
  }



  render() {
    const { dialog, counter, screenshot, visibleBtn, visibleScreenshot1, visibleScreenshot2 } = this.state;
    const text = dialog[counter];
    return (
      <ViroPortalScene id='BAScene' passable={true} dragType="FixedDistance" onDrag={() => {}}>
        <ViroPortal position={[1, 0, 0]} scale={[.5, .5, .5]} rotation={[0, 90, 0]}>
          <Viro3DObject
          source={require('../portal_res/portal_wood_frame/portal_wood_frame.vrx')}
          resources={[require('../portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'), require('../portal_res/portal_wood_frame/portal_wood_frame_normal.png'), require('../portal_res/portal_wood_frame/portal_wood_frame_specular.png')]} type="VRX"/>
        </ViroPortal>
        <Viro360Image source={require("../res/mountainscape-360_6_grid.jpg")}/>
        <Tutorial/>
      </ViroPortalScene>
    );
  }
};

ViroAnimations.registerAnimations({
  grow: {
    properties: {
      scaleX: 1.0,
      scaleY: 1.0,
      scaleZ: 0,
      opacity: 1.0},
    easing: "Bounce",
    duration: 1000},
  shrink: {
    properties: {
      scaleX: 0.5,
      scaleY: 0.5,
      scaleZ: 0,
      opacity: 1.0},
    easing: "Bounce",
    duration: 1000},
  growAndShrink: [
    ["grow", "shrink"]], //array of animated movements

  floatUp: {
    properties:{
      positionX: 0,
      positionY: +.05,
      positionZ: 0},
    easing: "EaseInEaseOut",
    duration: 700},
  floatDown: {
    properties:{
      positionX: 0,
      positionY: -.05,
      positionZ: 0},
    easing: "EaseInEaseOut",
    duration: 800},
  floatUpAndDown: [
    ["floatUp", "floatDown"]],

  rotate: {
    properties: {
      rotateZ: "+=45"},
    duration: 1000}
});

module.exports = BAScene;
