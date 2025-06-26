import { useFormContext, Controller } from 'react-hook-form';

import CustomRadio from '../CustomRadio/CustomRadio';

import s from './PaymentMethodForm.module.css';

const PaymentMethodForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleChange =
    (onChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

  return (
    <div className={s.radioForm}>
      <h2 className={s.radioFormTitle}>Payment</h2>

      <Controller
        name="paymentMethod"
        control={control}
        rules={{ required: 'Choose payment method' }}
        render={({ field }) => (
          <div className={s.radioFormWrap}>
            <CustomRadio
              label="Online payment"
              name={field.name}
              value="credit"
              checked={field.value === 'credit'}
              onChange={handleChange(field.onChange)}
              checkedIcon="/burger/check.svg"
            />

            <CustomRadio
              label="Cash on delivery"
              name={field.name}
              value="cash"
              checked={field.value === 'cash'}
              onChange={handleChange(field.onChange)}
              checkedIcon="/burger/check.svg"
            />
          </div>
        )}
      />

      {errors.paymentMethod && (
        <div className={s.error}>
          {typeof errors.paymentMethod?.message === 'string' &&
            errors.paymentMethod.message}
        </div>
      )}
    </div>
  );
};

export default PaymentMethodForm;
