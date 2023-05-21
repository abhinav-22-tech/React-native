import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElvatedCards from './components/ElvatedCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElvatedCards />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
