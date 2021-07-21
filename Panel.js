import React from 'react';
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
        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        R2D2
                    </Text>
                    <VrButton
                        onClick={() => {
                            AudioModule.playOneShot({
                                source: asset('r2d2.mp3'),
                                volume: 1
                            });
                        }}>
                        <Text>
                            Play Message 3
                        </Text>
                    </VrButton>
                    <VrButton
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
});
