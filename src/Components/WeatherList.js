import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Item = ({title, description}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const WeatherList = ({daily}) => {
  const renderItem = ({item}) => (
    <Item title={item.temp.day} description={item.weather[0].description} />
  );

  const sepratorView = () => <View style={styles.seprator} />;
  return (
    <SafeAreaView>
      <View>
        <View style={styles.view}>
          <Text style={styles.title}>7 days forecast</Text>
        </View>
        <FlatList
          data={daily}
          renderItem={renderItem}
          keyExtractor={item => item.dt}
          ItemSeparatorComponent={sepratorView}
        />
      </View>
    </SafeAreaView>
  );
};

export default WeatherList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  view: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    //backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 20,
  },
  seprator: {
    backgroundColor: '#000',
    height: 0.5,
  },
});
