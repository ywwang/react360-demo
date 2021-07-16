import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-360';
import Sphere from './components/sphere';
import TooltipComponent from './components/Tooltip.component';

export default class react360Demo extends React.Component {
  render() {
    //NativeModules.TooltipModule.setTooltips(this.props.name);
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Welcome to React 360 -
            </Text>
            
          <Sphere />
          </View>
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
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('react360Demo', () => react360Demo);
AppRegistry.registerComponent ('TooltipComponent', () =>
  TooltipComponent
);