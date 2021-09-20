import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>The best thing about a boolean is even if you are wrong, you are only off by a bit.</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txt:{
    padding: 12,
    textAlign: 'center',
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
