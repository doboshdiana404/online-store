import { useFormikContext, ErrorMessage } from 'formik';

import CustomRadio from '../CustomRadio/CustomRadio';
import NovaPoshtaSelects from '../NovaPoshtaSelects/NovaPoshtaSelects';
import s from '../PaymentMethodForm/PaymentMethodForm.module.css';

const DeliveryMethodForm = () => {
  const { values, setFieldValue } = useFormikContext<any>();

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('deliveryMethod', e.target.value); // ✅
  };

  return (
    <div className={s.radioForm} style={{ marginTop: '46px', height: 'auto' }}>
      <h2 className={s.radioFormTitle}>Shipping method</h2>

      <div className={s.radioFormWrap}>
        <CustomRadio
          label="Self pickup from our store"
          name="deliveryMethod"
          value="pickup"
          checked={values.deliveryMethod === 'pickup'}
          onChange={handleDeliveryChange}
          checkedIcon="/burger/check.svg"
        />

        <CustomRadio
          label="Courier taxi"
          name="deliveryMethod"
          value="courier"
          checked={values.deliveryMethod === 'courier'}
          onChange={handleDeliveryChange}
          checkedIcon="/burger/check.svg"
        />

        <CustomRadio
          label="Delivery by Nova Post"
          name="deliveryMethod"
          value="nova_poshta"
          checked={values.deliveryMethod === 'nova_poshta'}
          onChange={handleDeliveryChange}
          checkedIcon="/burger/check.svg"
        />
      </div>

      <ErrorMessage name="deliveryMethod" component="div" className={s.error} />

      {values.deliveryMethod === 'courier' && (
        <div className={s.commentWrap}>
          <label htmlFor="courierComment" className={s.commentLabel}>
            Leave your comment
          </label>
          <textarea
            id="courierComment"
            name="courierComment"
            placeholder="Your comment"
            className={s.commentField}
            onChange={(e) => setFieldValue('courierComment', e.target.value)}
            value={values.courierComment || ''}
          />
        </div>
      )}

      {values.deliveryMethod === 'nova_poshta' && <NovaPoshtaSelects />}
    </div>
  );
};

export default DeliveryMethodForm;
