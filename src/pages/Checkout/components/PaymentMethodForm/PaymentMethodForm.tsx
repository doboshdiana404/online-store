import { Controller, useFormContext } from 'react-hook-form';

import CustomRadio from '@/pages/Delivery/components/CustomRadio/CustomRadio';

import s from './PaymentMethodForm.module.css';

const paymentOptions = ['visa', 'mastercard', 'googlepay', 'applepay'];

const PaymentMethodForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const handlePaymentSystemChange =
    (onChange: (value: string) => void, method: string) => () => {
      onChange(method);
    };
  return (
    <div className={s.paymentMethodForm}>
      <h3 className={s.paymentTitle}>Payment Method</h3>

      <Controller
        name="paymentSystem"
        control={control}
        rules={{ required: 'Choose payment system' }}
        render={({ field }) => (
          <div className={s.paymentList}>
            {paymentOptions.map((method) => (
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
                name={field.name}
                value={method}
                checked={field.value === method}
                onChange={handlePaymentSystemChange(field.onChange, method)}
                checkedIcon="/burger/check2.svg"
              />
            ))}
          </div>
        )}
      />

      {errors.paymentSystem && (
        <div className={s.error}>{errors.paymentSystem.message as string}</div>
      )}
    </div>
  );
};

export default PaymentMethodForm;
