// MLouter.js

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroAnimations,
  ViroAmbientLight,
  ViroUtils,
  Viro3DObject,
  ViroNode,
  ViroImage
} from 'react-viro';

export default class MLouter extends Component{
  constructor(props){
    super(props)
      this.state={
        imgVisible: false,
        asteroidVisible: true,
        earthVisible: true,
        moonVisible: true,

      }
  }

  handleOrbClick = (evt) => {
    this.setState({
      imgVisible: true,
      asteroidVisible: false,
      earthVisible: false,
      moonVisible: false
    })
  }

  handleResumeClick = (evt) => {
    this.setState({
      imgVisible: false,
      asteroidVisible: true,
      earthVisible: true,
      moonVisible: true
    })
  }

  render(){
    return(
      <ViroNode>
        <ViroAmbientLight color="#ffffff" intensity={300}/>

        <ViroImage position={[0, 0, -1]}
          source={require('../assets/lepineresume.png')}
          visible={this.state.imgVisible}
          onClick={this.handleResumeClick}/>

          <Viro3DObject
            position={[-5, 0, -10]}
            source={require('../res/Asteroid/asteroid.obj')}
            resources={[
              require('../res/Asteroid/asteroid.mtl'),
              require('../res/Asteroid/Map__12_Cellular.jpg'),
              require('../res/Asteroid/Map__15_Noise.jpg'),
              require('../res/Asteroid/Map__4_Mix.jpg')
            ]}
            type="OBJ"
            visible={this.state.asteroidVisible}
            onClick={this.handleOrbClick}
            scale={[ .1, .1, .1]}
            animation={{
              name: 'rotateAsteroid',
              run: true,
              loop: true
            }}/>

          <Viro3DObject
            position={[5, 0, -10]}
            source={require('../res/Moon/moon.obj')}
            resources={[
              require('../res/Moon/moon.mtl'),
              require('../res/Moon/MoonMap2_2500x1250.jpg'),
              require('../res/Moon/moon-normal.jpg')
            ]}
            type="OBJ"
            visible={this.state.moonVisible}
            onClick={this.handleOrbClick}
            scale={[ .01, .01, .01]}
            animation={{
              name: 'rotateMoon',
              run: true,
              loop: true
            }}/>

          <Viro3DObject
            position={[0, 0, -15]}
            source={require('../res/Earth/earth.obj')}
            resources={[
              require('../res/Earth/earth.mtl'),
              require('../res/Earth/4096_bump.jpg'),
              require('../res/Earth/4096_earth.jpg'),              require('../res/Earth/4096_night_lights.jpg'),
              require('../res/Earth/4096_normal.jpg'),
            ]}
            type="OBJ"
            visible={this.state.earthVisible}
            onClick={this.handleOrbClick}
            scale={[ .005, .005, .005]}
            animation={{
              name: 'rotateEarth',
              run: true,
              loop: true
            }}/>

      </ViroNode>
    )
  }
}

ViroAnimations.registerAnimations({
  rotateAsteroid:{properties:{rotateX:"+=15", rotateY:"+=45", rotateZ:"+=25"}, duration:1000},
  rotateEarth:{properties:{rotateX:"+=1", rotateY:"+=15"}, duration:1000},
  rotateMoon:{properties:{rotateX:"+=1", rotateY:"-=25"}, duration:1000}
});
