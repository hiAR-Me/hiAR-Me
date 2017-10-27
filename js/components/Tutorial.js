'use strict';

import React, {Component} from 'react';

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

class Tutorial extends Component {
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
      <ViroNode>
        <ViroImage height={.6} width={.9} position={[3, .5, -1]} rotationZ={45}
          placeholderSource={require("../res/hiAR_banner.png")}
          source={require("../res/hiAR_banner.png")}
          transformBehaviors={["billboardY"]}/>

        <ViroImage height={.25} width={.6} position={[3, 0, -1]}
          placeholderSource={require("../res/btn.png")}
          source={require("../res/btn.png")}
          transformBehaviors={["billboardY"]}
          onClick={this.handleClick}/>

        <ViroImage height={.25} width={.6} position={[3, -.3, -1]}
          placeholderSource={require("../res/btn_blue.png")}
          source={require("../res/btn_blue.png")}
          transformBehaviors={["billboardY"]}
          onClick={this.handleBlueClick}
          visible={visibleBtn}/>
          {/* My Face and Chat Bubble */}
          <ViroNode position={[4,0,0]}
            transformBehaviors={["billboardY"]}>
            <ViroNode
              animation={{name: 'floatUpAndDown',
                          run: true,
                          loop: true,
                          delay: 0 }}>
              <ViroImage height={.5} width={.4} position={[0, 0, -.05]}
                placeholderSource={require("../res/Brandon.png")}
                source={require("../res/Brandon.png")}/>
              <ViroText
                text={text}
                textAlign="left"
                textAlignVertical="top"
                textLineBreakMode="justify"
                textClipMode="clipToBounds"
                color="#ffffff"
                width={1} height={2}
                style={{fontFamily:"San Francisco", fontSize:10, color:"#282828"}}
                position={[.5, -.075, 0]}/>
              <ViroImage height={.75} width={1.5} position={[.6, .6, -.2]}
                placeholderSource={require("../res/chat_bubble.png")}
                source={require("../res/chat_bubble.png")}/>
            </ViroNode>
          </ViroNode>


          <ViroImage height={.6} width={2} position={[4, -1, 0]}
            placeholderSource={require("../res/ScreenShotBtn.png")}
            source={require("../res/ScreenShotBtn.png")}
            transformBehaviors={["billboardY"]}
            visible={visibleScreenshot1}/>
          <ViroImage height={2} width={1.2} position={[4, -1, 1]}
            placeholderSource={require("../res/ScreenShotBlueBtn.png")}
            source={require("../res/ScreenShotBlueBtn.png")}
            transformBehaviors={["billboardY"]}
            visible={visibleScreenshot2}/>

              <ViroNode position={[-2,0,0]}
                transformBehaviors={["billboardY"]}>

                <ViroImage height={1.3} width={2} position={[2.2, 0, ]}
                  placeholderSource={require("../res/ViroNodes.png")}
                  source={require("../res/ViroNodes.png")}
                  transformBehaviors={["billboardY"]}/>
                <ViroImage height={1.3} width={1.4} position={[-2.2, 0, 0]}
                  placeholderSource={require("../res/BlueScreenShot.png")}
                  source={require("../res/BlueScreenShot.png")}
                  transformBehaviors={["billboardY"]}/>
                <ViroImage height={1.3} width={2} position={[0, 0, 0]}
                  placeholderSource={require("../res/AnimationScreenShot.png")}
                  source={require("../res/AnimationScreenShot.png")}
                  transformBehaviors={["billboardY"]}/>
              </ViroNode>
            </ViroNode>
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

module.exports = Tutorial;
