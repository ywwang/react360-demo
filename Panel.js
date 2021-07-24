import React from 'react';
import { StyleSheet } from 'react-360';
import {
    StyleSheet,
    Text,
    View,
    VrButton,
    NativeModules,
    asset
} from 'react-360';
import { rotate } from './utils/rotate';
const { AudioModule } = NativeModules;

export default class Panel extends React.Component {
    
    render() {
        NativeModules.TooltipModule.setTooltips();
        // return (
        //     <View style={styles.panel}>
        //         <View style={styles.greetingBox}>
        //         <Text style={styles.greeting}>
        //             Welcome to React 360 - demo
        //         </Text>
        //         </View>
        //     </View>
        // );
        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        Action Buttons
                    </Text>
                    <VrButton
                        style={styles.button}
                        onClick={() => {
                            AudioModule.playOneShot({
                                source: asset('r2d2.mp3'),
                                volume: 1
                            });
                        }}>
                        <Text>
                            Play Audio
                        </Text>
                    </VrButton>
                    <VrButton
                        style={styles.button}
                        onClick={() => rotate()}
                    >
                        <Text>
                        Rotate
                        </Text>
                    </VrButton>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: 'blue',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
    button: {
        borderColor: '#fff',
        borderWidth: 1,
        padding: 12,
        margin: 12,
    }
});
