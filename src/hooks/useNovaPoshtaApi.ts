import axios from 'axios';

const API_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = import.meta.env.VITE_NOVA_POSHTA_API_KEY;

export const getAreas = async () => {
  const res = await axios.post(API_URL, {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getAreas',
  });
  return res.data.data;
};

export const getCities = async (areaRef: string) => {
  const res = await axios.post(API_URL, {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getCities',
    methodProperties: {
      AreaRef: areaRef,
    },
  });
  return res.data.data;
};

export const getWarehouses = async (cityRef: string) => {
  const res = await axios.post(API_URL, {
    apiKey: API_KEY,
    modelName: 'AddressGeneral',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityRef: cityRef,
    },
  });
  return res.data.data;
};
