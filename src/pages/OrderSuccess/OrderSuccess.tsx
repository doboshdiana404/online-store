import React from 'react';

import { useNavigate } from 'react-router-dom';

import s from './OrderSuccess.module.css';

const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className={`container ${s.successOrderPage}`}>
      <h2 className={s.orderSuccessTitle}>Payment</h2>
      <div>
        <p className={s.successMessage}>
          Payment was successful, wait for delivery notification
        </p>
        <div className={s.successEmbleme}>
          <p className={s.successTitleMessage}>Payment successful</p>
          <button
            onClick={() => navigate('/catalog')}
            className={s.continueBtn}
          >
            Back to shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
