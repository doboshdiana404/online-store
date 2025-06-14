import { useField } from 'formik';

import CustomRadio from '../CustomRadio/CustomRadio';

import s from './PaymentMethodForm.module.css';

const PaymentMethodForm = () => {
  const [field, meta, helpers] = useField('paymentMethod');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value);
  };

  return (
    <div className={s.radioForm}>
      <h2 className={s.radioFormTitle}>Payment</h2>
      <div className={s.radioFormWrap}>
        <CustomRadio
          label="Online payment"
          name="paymentMethod"
          value="credit"
          checked={field.value === 'credit'}
          onChange={handleChange}
          checkedIcon="/burger/check.svg"
        />

        <CustomRadio
          label="Cash on delivery"
          name="paymentMethod"
          value="cash"
          checked={field.value === 'cash'}
          onChange={handleChange}
          checkedIcon="/burger/check.svg"
        />

        {meta.touched && meta.error && (
          <div className={s.error}>{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodForm;
