import React, { PureComponent } from 'react';
import { asset, StyleSheet } from 'react-360';
import Entity from 'Entity';
import { subscribe } from '../utils/rotate';
import { View } from 'react-native';

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
      <View style={styles.padding}>
        <Entity
          source={{
            gltf2: asset('sphere/scene.gltf'),
            bin: asset('sphere/scene.bin'),
          }}
          style={{transform:[
            { translate: [0, 0, 0] },
            { scaleX: 1 },
            { scaleY: 1 },
            { scaleZ: 1 },
            { rotateX: rotated },
          ]}}
        />
      </View>
    );
  }
  
  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 1 }));
  }
}

const styles = StyleSheet.create({
  padding: {
      margin: 100,
  },
});