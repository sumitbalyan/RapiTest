import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {getWeather} from '../actions';
import Weather from './Weather';
import WeatherList from './WeatherList';

const Home = () => {
  const [state, setState] = useState({
    latitude: '',
    longitude: '',
    errorMsg: 'Unable to read location, please try again later!',
    readyToLaunch: false,
  });
  const dispatch = useDispatch();
  const weather = useSelector(mystate => mystate.weather);
  console.log('weather= ', JSON.stringify(weather));
  useEffect(() => {
    let geoOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 60 * 60 * 24,
    };

    setState({readyToLaunch: false});
    const geoLocationSuccess = position => {
      const response = position.coords;
      const latitude = response.latitude;
      const longitude = response.longitude;
      console.log('Lat & Lng', latitude, longitude);
      dispatch(getWeather(latitude, longitude));
    };

    //Geolocation failure callback method
    const geoLocationFailure = err => {
      console.log(err);
      setState({
        readyToLaunch: false,
        errorMsg: 'Geo Location failure, permission denied, Please enable it.',
      });
      Alert.alert('Error', state.errorMsg);
    };
    //Asynchronous Pattern to read location
    Geolocation.getCurrentPosition(
      geoLocationSuccess,
      geoLocationFailure,
      geoOptions,
    );
  }, []);

  return (
    <View>
      {weather.items && (
        <>
          <Weather current={weather.items.current} />
          <WeatherList daily={weather.items.daily} />
        </>
      )}
    </View>
  );
};

export default Home;
