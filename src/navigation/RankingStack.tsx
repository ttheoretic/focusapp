import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RankingScreen from '../screens/RankingScreen';

const Stack = createStackNavigator();

export default function RankingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Leaderboard"
        component={RankingScreen}
        options={{ headerTitle: '🏆 Leaderboard' }}
      />
    </Stack.Navigator>
  );
}
