import { useFormContext, Controller } from 'react-hook-form';

import CustomRadio from '../CustomRadio/CustomRadio';
import NovaPoshtaSelects from '../NovaPoshtaSelects/NovaPoshtaSelects';
import s from '../PaymentMethodForm/PaymentMethodForm.module.css';

const DeliveryMethodForm = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const deliveryMethod = watch('deliveryMethod');
  const handleDeliveryMethodChange =
    (onChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };
  return (
    <div className={s.radioForm} style={{ marginTop: '46px', height: 'auto' }}>
      <h2 className={s.radioFormTitle}>Shipping method</h2>

      <Controller
        control={control}
        name="deliveryMethod"
        rules={{ required: 'Choose a delivery method' }}
        render={({ field }) => (
          <div className={s.radioFormWrap}>
            <CustomRadio
              label="Self pickup from our store"
              name={field.name}
              value="pickup"
              checked={field.value === 'pickup'}
              onChange={handleDeliveryMethodChange(field.onChange)}
              checkedIcon="/burger/check.svg"
            />

            <CustomRadio
              label="Courier taxi"
              name={field.name}
              value="courier"
              checked={field.value === 'courier'}
              onChange={handleDeliveryMethodChange(field.onChange)}
              checkedIcon="/burger/check.svg"
            />

            <CustomRadio
              label="Delivery by Nova Post"
              name={field.name}
              value="nova_poshta"
              checked={field.value === 'nova_poshta'}
              onChange={handleDeliveryMethodChange(field.onChange)}
              checkedIcon="/burger/check.svg"
            />
          </div>
        )}
      />

      {typeof errors.deliveryMethod?.message === 'string' && (
        <div className={s.error}>{errors.deliveryMethod.message}</div>
      )}

      {deliveryMethod === 'courier' && (
        <Controller
          control={control}
          name="courierComment"
          rules={{ required: 'Please enter a comment for courier' }}
          render={({ field }) => (
            <div className={s.commentWrap}>
              <label htmlFor="courierComment" className={s.commentLabel}>
                Leave your comment
              </label>
              <textarea
                id="courierComment"
                placeholder="Your comment"
                className={s.commentField}
                {...field}
              />
              {typeof errors.courierComment?.message === 'string' && (
                <div className={s.error}>{errors.courierComment.message}</div>
              )}
            </div>
          )}
        />
      )}

      {deliveryMethod === 'nova_poshta' && <NovaPoshtaSelects />}
    </div>
  );
};

export default DeliveryMethodForm;
