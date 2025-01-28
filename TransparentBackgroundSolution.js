// TransparentBackgroundSolution.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Explicit background to avoid bleed-through
  },
  transparentComponent: {
    position: 'absolute',
    top: 50,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0)', //Ensure transparency is correct format
  },
});

const TransparentBackgroundSolution = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./image.png')} style={{ width: 200, height: 200 }}/>
      <View style={styles.transparentComponent} />
    </View>
  );
};
export default TransparentBackgroundSolution; 