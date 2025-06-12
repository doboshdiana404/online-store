import { useState } from 'react';

import { ErrorMessage } from 'formik';

import CustomRadio from '../CustomRadio/CustomRadio';

import s from './PaymentMethodForm.module.css';
const PaymentMethodForm = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className={s.radioForm}>
      <h2 className={s.radioFormTitle}>Payment</h2>
      <div className={s.radioFormWrap}>
        <CustomRadio
          label="Online payment"
          name="payment"
          value="credit"
          checked={selected === 'credit'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <CustomRadio
          label="Cash on delivery"
          name="payment"
          value="cash"
          checked={selected === 'cash'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <ErrorMessage name="paymentMethod" component="div" />
      </div>
    </div>
  );
};

export default PaymentMethodForm;
