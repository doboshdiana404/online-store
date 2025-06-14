import { Field } from 'formik';

import s from './CartInfoForm.module.css';

const CartInfoForm = () => {
  return (
    <div className={s.cardInfoForm}>
      <div className={s.field}>
        <label htmlFor="cardNumber" className={s.cardInfoLabel}>
          Card number
        </label>
        <Field
          className={s.cardInfoInput}
          type="text"
          name="cardNumber"
          placeholder="Enter card number"
        />
      </div>
      <div className={s.field}>
        <label htmlFor="expiryDate" className={s.cardInfoLabel}>
          Validity period
        </label>
        <Field
          className={s.cardInfoInput}
          type="text"
          name="expiryDate"
          placeholder="Enter validity period"
        />
      </div>
      <div className={s.field}>
        <label htmlFor="expiryDate" className={s.cardInfoLabel}>
          CVV
        </label>
        <Field
          className={s.cardInfoInput}
          type="text"
          name="cvv"
          placeholder="Enter your CVV code"
        />
      </div>
    </div>
  );
};

export default CartInfoForm;
