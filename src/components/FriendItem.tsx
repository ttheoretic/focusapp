import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FriendItemProps {
  name: string;
  focusTime: number;
}

export default function FriendItem({ name, focusTime }: FriendItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.time}>{focusTime} Minuten Fokus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  time: { fontSize: 16, color: 'gray' },
});
