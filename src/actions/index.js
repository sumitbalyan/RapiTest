import {weatherConstant} from '../constants';
import {getweather} from '../services';

export const getWeather = (lat, lon) => {
  console.log('lat,lon = ', lat, lon);
  const {
    WEATTHER_REQUEST,
    WEATTHER_SUCCESS,
    WEATTHER_FAILURE,
  } = weatherConstant;
  const request = () => ({type: WEATTHER_REQUEST});
  const success = data => ({type: WEATTHER_SUCCESS, data});
  const fail = error => ({type: WEATTHER_FAILURE, error});

  return dispatch => {
    dispatch(request());
    getweather(lat, lon).then(
      response => {
        console.log('res= ', JSON.stringify(response));
        if (response) {
          dispatch(success(response));
        }
      },
      err => {
        dispatch(fail(err));
      },
    );
  };
};
