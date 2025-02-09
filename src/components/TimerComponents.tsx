import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Alert } from 'react-native';

Alert.alert('🎉 Zeit abgelaufen!', 'Dein Fokus-Timer ist beendet.');


export default function TimerComponent() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Fokus-Timer</Text>
      <CountDown
        until={25 * 60} // 25 Minuten Pomodoro
        onFinish={() => Alert.alert('🎉 Zeit abgelaufen!')}
        size={20}
        running={isRunning}
        timeToShow={['M', 'S']}
      />
      <View style={styles.buttons}>
        <Button title="Start" onPress={() => setIsRunning(true)} />
        <Button title="Pause" onPress={() => setIsRunning(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  buttons: { flexDirection: 'row', marginTop: 10 },
});
