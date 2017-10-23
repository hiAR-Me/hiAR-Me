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

class BAScene extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      text: "I am a test",
      dialog: [
        "Touch the button",
        "It Worked!  Try Again!",
        "Awesome just keep doing that",
        "Whoa an object!"
      ]
    }
  }
  // getInitialState() {
  //   return {
  //     text : "Initializing AR..."
  //   };
  // },


  handleClick = (source) => {
    let desiredDialogue= this.state.counter
    this.setState({
      counter: +1,
      text: this.state.dialog[desiredDialogue]
    })
    }





  render() {
    return (
      <ViroPortalScene id='BAScene' passable={true} dragType="FixedDistance" onDrag={() => {}}>
        <ViroPortal position={[1, 0, 0]} scale={[.5, .5, .5]} rotation={[0, 90, 0]}>
          <Viro3DObject
          source={require('../portal_res/portal_wood_frame/portal_wood_frame.vrx')}
          resources={[require('../portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'), require('../portal_res/portal_wood_frame/portal_wood_frame_normal.png'), require('../portal_res/portal_wood_frame/portal_wood_frame_specular.png')]} type="VRX"/>
        </ViroPortal>
        <Viro360Image source={require("../res/mountainscape-360_6_grid.jpg")}/>

        <ViroImage height={.25} width={.6} position={[3, 0, -1]}
          placeholderSource={require("../res/btn.png")}
          source={require("../res/btn.png")}
          transformBehaviors={["billboardY"]}
          onClick={this.handleClick}
        />
        <ViroImage height={.6} width={.9} position={[3, .5, -1]} rotationZ={45}
          placeholderSource={require("../res/hiAR_banner.png")}
          source={require("../res/hiAR_banner.png")}
          transformBehaviors={["billboardY"]}/>
          {/* My Face and Chat Bubble */}
          <ViroNode position={[3,0,0]}>
            <ViroNode
              animation={{name: 'floatUpAndDown',
                          run: true,
                          loop: true,
                          delay: 0 }}>
              <ViroImage height={.5} width={.4} position={[0, 0, -.05]}
                placeholderSource={require("../res/Brandon.png")}
                source={require("../res/Brandon.png")}
                transformBehaviors={["billboardY"]}/>
              <ViroText
                text={this.state.text}
                textAlign="left"
                textAlignVertical="top"
                textLineBreakMode="justify"
                textClipMode="clipToBounds"
                color="#ff0000"
                width={1} height={2}
                style={{fontFamily:"San Francisco", fontSize:10, color:"#282828"}}
                position={[.25, -.3, .5]}
                transformBehaviors={["billboardY"]}
              />
              <ViroImage height={.75} width={1} position={[.3, .6, .4]}
                placeholderSource={require("../res/chat_bubble.png")}
                source={require("../res/chat_bubble.png")}
                transformBehaviors={["billboardY"]}/>
            </ViroNode>
          </ViroNode>

        {/* <ViroParticleEmitter
          position={[2, 1, 0]}
          duration={2000}
          visible={true}
          delay={0}
          run={true}
          loop={true}
          fixedToEmitter={true}

          image={{
            source:require("../res/particle.png"),
            height:0.2,
            width:0.2,
            bloomThreshold:1.0
          }}

          spawnBehavior={{
            particleLifetime:[4000,4000],
            emissionRatePerSecond:[150, 200],
            spawnVolume:{
              shape:"box",
              params:[20, 1, 20],
              spawnOnSurface:false
            },
            maxParticles:800
          }}

          particleAppearance={{
            opacity:{
              initialRange:[0, 0],
              factor:"time",
              interpolation:[
                {endValue:0.5, interval:[0,500]},
                {endValue:1.0, interval:[4000,5000]}
              ]
            },

            // rotation:{
            //   initialRange:[1, 360],
            //   factor:"time",
            //   interpolation:[
            //     {endValue:1080, interval:[0,5000]},
            //   ]
            // },

            scale:{
              initialRange:[[5,5,5], [10,10,10]],
              factor:"time",
              interpolation:[
                {endValue:[3,3,3], interval:[0,4000]},
                {endValue:[0,0,0], interval:[4000,5000]}
              ]
            },
          }}

          particlePhysics={{
            velocity:{
            initialRange:[[-2,-.5,0], [2,-3.5,0]]}
          }}
        /> */}
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

var styles = StyleSheet.create({
  brandonTextStyle: {
    fontFamily: 'depixelklein',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = BAScene;
