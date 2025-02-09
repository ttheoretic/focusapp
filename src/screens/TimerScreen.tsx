import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⏳ Timer Screen</Text>
      <Button title="Start Timer" onPress={() => console.log('Timer started')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});
