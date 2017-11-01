'use strict';

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {ViroParticleEmitter, ViroNode, ViroSpotLight} from 'react-viro';

var SmokeEmitter = React.createClass({
  location: PropTypes.arrayOf(PropTypes.number),
  run: PropTypes.bool,
  power: PropTypes.number,

    render: function () {
      return (
        <ViroNode position={[0, 0, -2]}>
          <ViroParticleEmitter
            position={[0, 0, 0]}
            duration={1500}
            visible={true}
            run={true}
            loop={true}
            fixedToEmitter={false}
            image={{
              source: require("../res/darkSmoke.png"),
              height: 2,
              width: 1.5
            }}
            spawnBehavior={{
            particleLifetime: [ 1500, 1500 ],
            emissionRatePerSecond: [ 70, 80 ],
            maxParticles: 800
            }}
            particlePhysics={{
              velocity: {
                initialRange: [
                  [ -.25 * this.props.power,
                    -1 * this.props.power,
                    -.25 * this.props.power],

                  [ .25 * this.props.power,
                    -1 * this.props.power,
                    .25 * this.props.power
                  ]
                ]
              },
            }}
          />
        </ViroNode>
      )
    }
  }
)

module.exports = SmokeEmitter;
