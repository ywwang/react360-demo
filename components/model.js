import React from 'react';
import {
    Text,
    View,
    AmbientLight,
    asset
} from 'react-360';
import Entity from 'Entity';
export default class Model extends React.Component {

    render() {
        return (
            <View>
              <Text>Here is model</Text>
            <View>
                <AmbientLight intensity={5} />
                <Entity source={{ obj: asset('bugatti/bugatti.obj'), mtl: asset('bugatti/bugatti.mtl') }}
                    lit={true}
                    style={{
                      transform: [
                        { rotateY: 1 },
                        { scaleX: 1 },
                        { scaleY: 1 },
                        { scaleZ: 1 },
                      ],
                    }}
                />
            </View>
            <Text>Here is model end</Text>
            </View>
        )
    }
}