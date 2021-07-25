import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';
import Sphere from './components/sphere';
import Model from './components/model';
import TooltipComponent from './components/Tooltip.component';
import Panel from './Panel';

AppRegistry.registerComponent('react360Demo', () => Panel);
AppRegistry.registerComponent('Ball1', () => Sphere);
AppRegistry.registerComponent('Model', () => Model);
AppRegistry.registerComponent('TooltipComponent', () => TooltipComponent);
