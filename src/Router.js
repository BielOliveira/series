import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen'
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: SeriesPage
  },
  'Login':{
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem Vindo!'
    }
  },
  'SerieDetail':{
    screen: SerieDetailPage,
    navigationOptions: {
      title: 'Página de Detalhes'
    }
  },
}, {
  defaultNavigationOptions: {
    title: "Series",
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;