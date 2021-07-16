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
                <Entity source={{ obj: asset('r2d2.obj'), mtl: asset('r2d2.mtl') }}
                    lit={true}
                    style={{ transform: [{ rotateY: 10 },{ scaleX: 1 },
                      { scaleY: 1 },
                      { scaleZ: 1 },] }}
                />
            </View>
            <Text>Here is model end</Text>
            </View>
        )
    }
}