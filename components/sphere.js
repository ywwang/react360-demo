import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';
import { subscribe } from '../utils/rotate';

export default class Sphere extends PureComponent {
  state = {
    rotated: 0,
  };

  componentDidMount() {
    subscribe(this.handleRotate);
  }

  render() {
    const { rotated } = this.state;
    return (
      <Entity
        source={{
          gltf2: asset('sphere/scene.gltf'),
          bin: asset('sphere/scene.bin'),
        }}
        style={{transform:[
          {translate: [-10, 0, -10]},
          { scaleX: 1 },
          { scaleY: 1 },
          { scaleZ: 1 },
          { rotateX: 0 },
        ]}}
      />
    );
  }
  
  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 1 }));
  }
}