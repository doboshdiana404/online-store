import { useState } from 'react';

import { ErrorMessage } from 'formik';

import CustomRadio from '../CustomRadio/CustomRadio';
import s from '../PaymentMethodForm/PaymentMethodForm.module.css';
const DeliveryMethodForm = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className={s.radioForm} style={{ marginTop: '46px' }}>
      <h2 className={s.radioFormTitle}>Shipping method</h2>
      <div className={s.radioFormWrap}>
        <CustomRadio
          label="Self pickup from our store"
          name="deliveryMethod"
          value="pickup"
          checked={selected === 'pickup'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <CustomRadio
          label="Courier taxi"
          name="deliveryMethod"
          value="courier"
          checked={selected === 'courier'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <CustomRadio
          label="Delivery by Nova Post"
          name="deliveryMethod"
          value="nova_poshta"
          checked={selected === 'nova_poshta'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <ErrorMessage name="deliveryMethod" component="div" />
      </div>
    </div>
  );
};

export default DeliveryMethodForm;
