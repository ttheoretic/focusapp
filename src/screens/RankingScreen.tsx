/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// @ts-ignore
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface User {
  id: string;
  name: string;
  focusTime: number; // Fokuszeit in Minuten
}

export default function RankingScreen({ navigation }: { navigation: any }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('users')
      .orderBy('focusTime', 'desc') // Sortierung nach Fokuszeit
      .onSnapshot((snapshot: { docs: any[]; }) => {
        const data = snapshot.docs.map((doc: { id: any; data: () => any; }) => ({
          id: doc.id,
          ...doc.data(),
        })) as User[];
        setUsers(data);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleAddFriend} style={styles.iconContainer}>
          <Ionicons name="person-add" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleAddFriend = () => {
    // Hier kannst du einen Screen für Freunde-Hinzufügen öffnen
    console.log('Freund hinzufügen');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Lade Leaderboard...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Leaderboard</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.rank}>
              {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`}
            </Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.focusTime}>{item.focusTime} min</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rank: { fontSize: 18, fontWeight: 'bold' },
  name: { fontSize: 18 },
  focusTime: { fontSize: 16, color: 'gray' },
  iconContainer: { marginRight: 15 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

