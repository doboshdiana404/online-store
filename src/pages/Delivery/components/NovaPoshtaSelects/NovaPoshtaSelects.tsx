import { useEffect, useState } from 'react';

import { useFormikContext } from 'formik';

import s from './NovaPoshtaSelects.module.css';

import { getAreas, getCities, getWarehouses } from '@/hooks/useNovaPoshtaApi';

const NovaPoshtaSelects = () => {
  const { values, setFieldValue } = useFormikContext<any>();

  const [areas, setAreas] = useState([]);
  const [cities, setCities] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getAreas().then(setAreas);
  }, []);

  useEffect(() => {
    if (values.areaRef) {
      getCities(values.areaRef).then(setCities);
    }
  }, [values.areaRef]);

  useEffect(() => {
    if (values.cityRef) {
      getWarehouses(values.cityRef).then(setWarehouses);
    }
  }, [values.cityRef]);

  return (
    <div className={s.choiseAddress}>
      <div className={s.selectWrap}>
        <label className={s.addressSelectLabel}>Select the region</label>
        <select
          name="areaRef"
          value={values.areaRef || ''}
          onChange={(e) => {
            setFieldValue('areaRef', e.target.value);
            setFieldValue('cityRef', '');
            setFieldValue('warehouseRef', '');
          }}
          className={s.selectAddressField}
        >
          <option value="">Region</option>
          {areas.map((area: any) => (
            <option key={area.Ref} value={area.Ref}>
              {area.Description}
            </option>
          ))}
        </select>
      </div>

      <div className={s.selectWrap}>
        <label className={s.addressSelectLabel}>Select the sity</label>
        <select
          name="cityRef"
          value={values.cityRef || ''}
          onChange={(e) => {
            setFieldValue('cityRef', e.target.value);
            setFieldValue('warehouseRef', '');
          }}
          disabled={!values.areaRef}
          className={s.selectAddressField}
        >
          <option value="">City</option>
          {cities.map((city: any) => (
            <option key={city.Ref} value={city.Ref}>
              {city.Description}
            </option>
          ))}
        </select>
      </div>

      <div className={s.selectWrap}>
        <label className={s.addressSelectLabel}>
          Select the post office number
        </label>
        <select
          name="warehouseRef"
          value={values.warehouseRef || ''}
          onChange={(e) => setFieldValue('warehouseRef', e.target.value)}
          disabled={!values.cityRef}
          className={s.selectAddressField}
        >
          <option value="">Post number</option>
          {warehouses.map((wh: any) => (
            <option key={wh.Ref} value={wh.Ref}>
              {wh.Description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NovaPoshtaSelects;
