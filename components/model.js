import React from 'react';
import { Text, View, AmbientLight, asset } from 'react-360';
import Entity from 'Entity';
import { subscribe } from '../utils/rotate';
export default class Model extends React.Component {
  state = {
    rotated: 0,
  };
  componentDidMount() {
    subscribe(this.handleRotate);
  }
  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 3 }));
  };
  render() {
    const { rotated } = this.state;
    return (
      <View>
        <Text>Here is model</Text>
        <View>
          <AmbientLight intensity={5} />
          <Entity
            source={{
              obj: asset('bugatti/bugatti.obj'),
              mtl: asset('bugatti/bugatti.mtl'),
            }}
            lit={true}
            style={{
              transform: [
                { rotateY: rotated },
                { scaleX: 1 },
                { scaleY: 1 },
                { scaleZ: 1 },
              ],
            }}
          />
        </View>
        <Text>Here is model end</Text>
      </View>
    );
  }
}
