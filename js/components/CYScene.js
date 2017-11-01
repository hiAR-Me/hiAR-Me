'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene, ViroText, ViroVideo, ViroAnimations, ViroSceneNavigator, ViroScene, ViroAmbientLight, Viro360Video, Viro360Image, ViroUtils, ViroPortal, ViroPortalScene, Viro3DObject, ViroDirectionalLight, Text, ViroButton, ViroImage, ViroMaterials, ViroNode
} from 'react-viro';

class CYScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCode: false ,
      showResume: false,
      showResumeButton: true
    }
  }

  _handleClick = (source) => {
    if (this.state.showCode === false) {
      this.setState({showCode: true})
    } else (
      this.setState({showCode: false})
    )
  }

  _handleResumeClick = (source) => {
    if (this.state.showResume === false && this.state.showResumeButton === true) {
      this.setState({
        showResume: true,
        showResumeButton: false})
    } else (
      this.setState({
        showResume: false,
        showResumeButton: true})
    )
  }

  render(){
    const { showCode } = this.state;
    return (
      <ViroPortalScene id= 'CYScene' passable={true}
      dragType="FixedDistance" onDrag={()=>{}}>

      <ViroPortal position={[-1, 0, 0]} scale={[.3, .3, .3]} rotation={[0, 90, 0]}>

              <Viro3DObject source={require('../portal_res/portal_archway/portal_archway.vrx')}
                    resources={[require('../portal_res/portal_archway/portal_archway_diffuse.png'),
                    require('../portal_res/portal_archway/portal_archway_normal.png'),
                    require('../portal_res/portal_archway/portal_archway_specular.png')]}
                  type="VRX"
              />

      </ViroPortal>

      {/*VIRO PORTAL 360 IMAGE BACKGROUND*/}

        <Viro360Image
          source={require("../portal_res/Chad360Scene/360_blocks.jpg")}
        />

      {/*VIRO PORTAL 360 IMAGE BACKGROUND END*/}


{/*VIRO NODE CONTAINING BASKETBALL STUFF AND CODE BUTTON*/}

      <ViroNode
        position={[-4,0,0]}
        transformBehaviors={["billboardY"]}
      >

          <ViroText
            text="Basketball fan!!"
            textAlign="center"
            textAlignVertical="top"
            textLineBreakMode="justify"
            textClipMode="clipToBounds"
            color="#000000"
            width={1} height={1}
            style={{fontFamily:"Garamond", fontSize:20, color:"#000000"}}
            position={[0,.85,0]}
          />

          <ViroImage
              source={require("../portal_res/Chad2DImages/kobe.png")}
              animation={{
                name:'getBiggerAndSmaller',
                run:true,
                loop: true,
                delay: 0
              }}
              position={[0,.05,0]}
              height={.3}
              width={.5}
          />


          <ViroImage
            source={require("../portal_res/Chad2DImages/viewcode.png")}
            onClick={this._handleClick}
            position={[0,.4,0]}
            height={.4}
            width={.4}

          />

          <ViroImage
          source={require("../portal_res/Chad2DImages/functionalmethods.png")}
          position={[-.5,.05,0]}
          height={.4}
          width={.4}
          visible={this.state.showCode}
          />

          <ViroImage
          source={require("../portal_res/Chad2DImages/animations.png")}
          position={[.5,.05,0]}
          height={.4}
          width={.4}
          visible={this.state.showCode}
          />

      </ViroNode>

{/*END BBALL VIRONODE}*/}

{/*START RESUME VIRONODE}*/}

      <ViroNode
      position={[-3,0,3]}
      >

        <ViroImage
        source={require("../portal_res/Chad2DImages/findoutmore.png")}
        onClick={this._handleResumeClick}
        visible={this.state.showResumeButton}
        position={[0,.05,0]}
        height={.8}
        width={.8}
        transformBehaviors={["billboardY"]}
        />

        <ViroImage
        source={require("../portal_res/Chad2DImages/resume.png")}
        position={[.5,.05,0]}
        onClick={this._handleResumeClick}
        height={1.4}
        width={1.1}
        transformBehaviors={["billboardY"]}
        visible={this.state.showResume}
        />

      </ViroNode>

{/*END RESUME VIRONODE}*/}

      <ViroNode
      position={[3,0,-3]}
      >

        <ViroImage
        source={require("../res/hiAR_banner.png")}
        animation={{
          name:'floatUpAndDown',
          run:true,
          loop: true,
          delay: 0
        }}
        position={[.5,.05,0]}
        height={1}
        width={1.9}
        transformBehaviors={["billboardY"]}
        />

      </ViroNode>


      </ViroPortalScene>
    );
  }
}

ViroAnimations.registerAnimations({
  getBigger: {
    properties: {
      scaleX: 1.0,
      scaleY: 1.0,
      scaleZ: 0,
      opacity: 1.0},
    easing: "Bounce",
    duration: 2000},
  getSmaller: {
    properties: {
      scaleX: 0.5,
      scaleY: 0.5,
      scaleZ: 0,
      opacity: 1.0},
    easing: "EaseIn",
    duration: 2000},
  getBiggerAndSmaller: [
    ["getBigger", "getSmaller"]],

  floatUp: {
      properties:{
        positionX: 0,
        positionY: +1.25,
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
      ["floatUp", "floatDown"]]
});


var styles = StyleSheet.create({
  helloWorldTextStyle: {
  fontFamily: 'Garamond',
  fontSize: 30,
  color: '#000000',
  textAlignVertical: 'center',
  textAlign: 'center',
  },
});

module.exports = CYScene;
