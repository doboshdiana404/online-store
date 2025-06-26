import { useRef } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import s from './CartInfoForm.module.css';

const formatExpiryDate = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '').slice(0, 4);

  let month = digitsOnly.slice(0, 2);
  const year = digitsOnly.slice(2, 4);

  if (month.length === 1 && parseInt(month[0]) > 1) {
    month = '0' + month[0];
  }

  if (month.length === 2) {
    const monthNum = parseInt(month);
    if (monthNum === 0) {
      month = '01';
    } else if (monthNum > 12) {
      month = '12';
    }
  }

  if (digitsOnly.length <= 2) return month;
  return `${month}/${year}`;
};

const formatCardNumber = (value: string) => {
  return value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim();
};

const CartInfoForm = () => {
  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();
  const cardNumber = watch('cardNumber') || '';

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setValue('cardNumber', formatted, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const cvvRef = useRef<HTMLInputElement>(null);
  const handleExpiryDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const formatted = formatExpiryDate(e.target.value);
    onChange(formatted);
    if (formatted.length === 5) {
      cvvRef.current?.focus();
    }
  };
  const handleCvvChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const value = e.target.value.replace(/\D/g, '');
    onChange(value);
  };

  return (
    <div className={s.cardInfoForm}>
      <div className={s.field}>
        <label htmlFor="cardNumber" className={s.cardInfoLabel}>
          Card number
        </label>
        <input
          {...register('cardNumber')}
          className={s.cardInfoInput}
          type="text"
          placeholder="Enter card number"
          id="cardNumber"
          onChange={handleCardNumberChange}
          value={cardNumber}
        />
        {typeof errors.cardNumber?.message === 'string' && (
          <div className={s.error}>{errors.cardNumber.message}</div>
        )}
      </div>

      <div className={s.field}>
        <label htmlFor="expiryDate" className={s.cardInfoLabel}>
          Validity period
        </label>
        <Controller
          name="expiryDate"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={s.cardInfoInput}
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              id="expiryDate"
              onChange={(e) => handleExpiryDateChange(e, field.onChange)}
            />
          )}
        />
        {typeof errors.expiryDate?.message === 'string' && (
          <div className={s.error}>{errors.expiryDate.message}</div>
        )}
      </div>

      <div className={s.field}>
        <label htmlFor="cvv" className={s.cardInfoLabel}>
          CVV
        </label>

        <Controller
          name="cvv"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              ref={cvvRef}
              type="password"
              inputMode="numeric"
              placeholder="Enter your CVV code"
              maxLength={3}
              className={s.cardInfoInput}
              onChange={(e) => handleCvvChange(e, field.onChange)}
            />
          )}
        />

        {typeof errors.cvv?.message === 'string' && (
          <div className={s.error}>{errors.cvv.message}</div>
        )}
      </div>
    </div>
  );
};

export default CartInfoForm;
