import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/screens/Home';
import Detail from './components/screens/Detail';

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(appNavigator);
