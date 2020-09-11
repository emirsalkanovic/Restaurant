import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from '../features/auth/components/SplashScreen';
import LandingScreen from '../features/auth/components/LandingScreen';
import LoginScreen from '../features/auth/components/LoginScreen';
import WaiterMainScreen from '../features/waiter/components/WaiterMainScreen';
import { COLOR_PRIMARY_WHITE, COLOR_PRIMARY_PURPLE } from '../assets/colors/colors';
import ProfileScreen from '../features/profile/components/ProfileScreen';
import MainCalendarScreen from '../features/calendar-waiter/components/MainCalendarScreen';
import ManagerMainScreen from '../features/manager/components/ManagerMainScreen';
import MainStatisticScreen from '../features/statistics/components/MainStatisticScreen';
import MainSupplyScreen from '../features/supplies/components/MainSupplyScreen';
import SinginScreen from '../features/auth/components/SigninScreen';


const AppStack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name='Splash' component={SplashScreen} />
        <AppStack.Screen name='Landing' component={LandingScreen} />
        <AppStack.Screen name='Signin' component={SinginScreen} />
        <AppStack.Screen name='Login' component={LoginScreen} />
        <AppStack.Screen
          name='WaiterDashboard'
          component={WaiterDashboard}
        // options={{ headerLert: null }}
        />
        <AppStack.Screen name='Manager' component={ManagerDashboard} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const WaiterStack = createBottomTabNavigator();

function WaiterDashboard() {
  return (
    <WaiterStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const { name } = route;
          let icon;
          switch (name) {
            case 'Narudzbe':
              icon = focused
                ? require('../assets/img/bottom_nav_icon_cop.png')
                : require('../assets/img/bottom_nav_icon_cop_unselected.png');
              return <Image source={icon} style={{ width: 24, height: 24, marginTop: '1%' }} />;
            case 'Kalendar':
              icon = focused
                ? require('../assets/img/bottom_nav_schedule_icon.png')
                : require('../assets/img/bottom_nav_schedule_icon_unselected.png')
              return <Image source={icon} style={{ width: 24, height: 24 }} />;
            case 'Profil':
              icon = focused
                ? require('../assets/img/bottom_nav_icon_profile.png')
                : require('../assets/img/bottom_nav_icon_profile_unselected.png');
              return <Image source={icon} style={{ width: 24, height: 24 }} />;
            default:
              break;
          }
        }
      })}
      swipeEnabled={true}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: COLOR_PRIMARY_PURPLE,
        inactiveTintColor: COLOR_PRIMARY_WHITE,
        header: null,
        indicatorStyle: { backgroundColor: 'black' },
        style: {
          backgroundColor: 'white',
          fontSize: 18,
          textAlign: 'center',
        },
        iconStyle: {
          width: 47,
          height: 47
        }
      }
      }
    >
      <WaiterStack.Screen
        name="Narudzbe"
        component={WaiterMainScreen}
      />

      <WaiterStack.Screen
        name="Kalendar"
        component={MainCalendarScreen}
      />

      <WaiterStack.Screen
        name="Profil"
        component={ProfileScreen}
      />

    </WaiterStack.Navigator>
  );
}

const ManagerStack = createBottomTabNavigator();

function ManagerDashboard() {
  return (
    <ManagerStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const { name } = route;
          let icon;
          switch (name) {
            case 'Statistika':
              icon = focused
                ? require('../assets/img/certificate_selected.png')
                : require('../assets/img/certificate.png');
              return <Image source={icon} style={{ width: 24, height: 24, }} />;
            case 'Zalihe':
              icon = focused
                ? require('../assets/img/bottom_nav_icon_cop.png')
                : require('../assets/img/bottom_nav_icon_cop_unselected.png');
              return <Image source={icon} style={{ width: 24, height: 24 }} />;
            case 'Staff':
              icon = focused
                ? require('../assets/img/bottom_nav_schedule_icon.png')
                : require('../assets/img/bottom_nav_schedule_icon_unselected.png')
              return <Image source={icon} style={{ width: 24, height: 24 }} />;
            case 'Profil':
              icon = focused
                ? require('../assets/img/bottom_nav_icon_profile.png')
                : require('../assets/img/bottom_nav_icon_profile_unselected.png');
              return <Image source={icon} style={{ width: 24, height: 24 }} />;
            default:
              break;
          }
        }
      })}
      swipeEnabled={true}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: COLOR_PRIMARY_PURPLE,
        inactiveTintColor: COLOR_PRIMARY_WHITE,
        header: null,
        indicatorStyle: { backgroundColor: 'black' },
        style: {
          backgroundColor: 'white',
          fontSize: 18,
          textAlign: 'center',
        },
        iconStyle: {
          width: 47,
          height: 47
        }
      }
      }
    >
      <ManagerStack.Screen
        name="Statistika"
        component={MainStatisticScreen}
      />

      <ManagerStack.Screen
        name="Zalihe"
        component={MainSupplyScreen}
      />

      <ManagerStack.Screen
        name="Staff"
        component={ManagerMainScreen}
      />

      <ManagerStack.Screen
        name="Profil"
        component={ManagerMainScreen}
      />

    </ManagerStack.Navigator>
  );
}

export default Router;

