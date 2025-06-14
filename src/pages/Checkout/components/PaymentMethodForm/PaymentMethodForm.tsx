import { useFormikContext } from 'formik';

import CustomRadio from '@/pages/Delivery/components/CustomRadio/CustomRadio';

import { CheckoutFormValues } from '../types/forms';

import s from './PaymentMethodForm.module.css';

const PaymentMethodForm = () => {
  const { values, setFieldValue } = useFormikContext<CheckoutFormValues>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('paymentSystem', e.target.value);
  };

  return (
    <div className={s.paymentMethodForm}>
      <h3 className={s.paymentTitle}>Payment Method</h3>

      <div className={s.paymentList}>
        {['visa', 'mastercard', 'googlepay', 'applepay'].map((method) => (
          <CustomRadio
            key={method}
            label={
              <img
                src={`/checkout/${method}.png`}
                width={34}
                height={24}
                alt={method}
              />
            }
            name="paymentSystem"
            value={method}
            checked={values.paymentSystem === method}
            onChange={handleChange}
            checkedIcon="/burger/check2.svg"
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodForm;
