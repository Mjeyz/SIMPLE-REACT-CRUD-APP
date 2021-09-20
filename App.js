import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Saaere gama paa lill champ!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  txt:{
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
