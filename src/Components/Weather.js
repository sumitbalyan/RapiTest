import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Weather = ({current}) => {
  console.log(current.temp);
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.text}>Current Temp - {current.temp}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Weather;

const styles = StyleSheet.create({
  view: {alignItems: 'center', justifyContent: 'center', marginTop: 40},
  text: {
    fontSize: 30,
    color: '#000000',
  },
});
