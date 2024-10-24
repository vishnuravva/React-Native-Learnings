/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import PizzaTranslate from './PizzaTranslate';
import ScrollViewDemo from './ScrollViewDemo';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';
AppRegistry.registerComponent(appName, () => SectionListBasics);
