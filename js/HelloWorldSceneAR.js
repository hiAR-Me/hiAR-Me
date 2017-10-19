'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
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
} from 'react-viro';

var HelloWorldSceneAR = React.createClass({
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },

  render: function() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "hiAR.me"})}}>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
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

         <ViroPortalScene id='MLScene' passable={true} dragType="FixedDistance" onDrag={()=>{}}>
           <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
             <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
               resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                           require('./portal_res/portal_ship/portal_ship_normal.png'),
                           require('./portal_res/portal_ship/portal_ship_specular.png')]}
               type="VRX"/>
           </ViroPortal>
           <Viro360Image source={require("./portal_res/360_island.jpg")} />
         </ViroPortalScene>

         <ViroPortalScene id= 'CYScene' passable={true} dragType="FixedDistance" onDrag={()=>{}}>
           <ViroPortal position={[-1.5, 0, -1]} scale={[.1, .1, .1]}>
             <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
               resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                           require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                           require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
               type="VRX"/>
           </ViroPortal>
           <Viro360Image source={require("./portal_res/360_wide.jpg")} />
         </ViroPortalScene>

         <ViroPortalScene id='BAScene' passable={true} dragType="FixedDistance" onDrag={()=>{}}>
           <ViroPortal position={[1, 0, -1]} scale={[.5, .5, .5]}>
             <Viro3DObject source={require('./portal_res/portal_archway/portal_archway.vrx')}
               resources={[require('./portal_res/portal_archway/portal_archway_diffuse.png'),
                           require('./portal_res/portal_archway/portal_archway_normal.png'),
                           require('./portal_res/portal_archway/portal_archway_specular.png')]}
               type="VRX"/>
           </ViroPortal>
           <Viro360Image source={require("./portal_res/360_church.jpg")} />
         </ViroPortalScene>

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