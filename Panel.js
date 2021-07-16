import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    VrButton,
    NativeModules,
    asset
} from 'react-360';
import Sphere from './components/sphere';
const { AudioModule } = NativeModules;

export default class Panel extends React.Component {
    render() {
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
                            });
                        }}>
                        <Text>
                            Play Message
                        </Text>
                    </VrButton>
                    <Sphere />
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
