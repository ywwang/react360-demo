import React, { PureComponent } from 'react';
import { asset, StyleSheet } from 'react-360';
import Entity from 'Entity';
import { View } from 'react-native';

export default class Sphere extends PureComponent {
  state = {
    rotated: 0,
  };

  componentDidMount() {
    setInterval(() => this.handleRotate(), 300);
  }

  render() {
    const { rotated } = this.state;
    return (
      <View style={styles.padding}>
        <Entity
          source={{
            gltf2: asset('sphere/scene.gltf'),
          }}
          lit={true}
          style={{
            transform: [
              { translate: [0, 0, 0] },
              { scaleX: 1 },
              { scaleY: 1 },
              { scaleZ: 1 },
              { rotateX: rotated },
              { rotateY: rotated },
              { rotateZ: rotated },
            ],
          }}
        />
      </View>
    );
  }

  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 2 }));
  };
}

const styles = StyleSheet.create({
  padding: {
    margin: 100,
  },
});
