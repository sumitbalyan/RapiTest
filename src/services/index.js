import {get} from './API';
import {weatherConstant} from '../constants';

export const getweather = async (lat, lon) =>
  get(
    `${weatherConstant.url}lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&APPID=f5102f89551bea1bc6d7950282d7dffd`
  );
