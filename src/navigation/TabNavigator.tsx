import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import TimerScreen from '../screens/TimerScreen';
import RankingScreen from '../screens/RankingScreen';
import SettingsScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

// ✅ Move tabBarIcon function OUTSIDE of the component
const getTabBarIcon = (routeName: string, color: string, size: number) => {
  const icons: Record<string, string> = {
    Home: 'bar-chart',
    Timer: 'timer',
    Ranking: 'trophy',
    Settings: 'settings',
  };
  return <Ionicons name={icons[routeName]} size={size} color={color} />;
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

