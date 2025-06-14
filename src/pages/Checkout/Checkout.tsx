import { Formik, Form } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import s from './Checkout.module.css';
import AgreementCheckbox from './components/AgreementCheckbox/AgreementCheckbox';
import CartInfoForm from './components/CartInfoForm/CartInfoForm';
import PaymentMethodForm from './components/PaymentMethodForm/PaymentMethodForm';

import { useAppDispatch } from '@/redux/hooks';
import { clearCart } from '@/redux/slices/shoppingCartSlice';
import { store } from '@/redux/store';

const initialValues = {
  paymentSystem: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  agreement: false,
};

const validationSchema = Yup.object({
  paymentSystem: Yup.string().required('Choose payment system'),
  cardNumber: Yup.string().required('Card number is required'),
  expiryDate: Yup.string().required('Validity period is required'),
  cvv: Yup.string().required('CVV is required'),
  agreement: Yup.boolean().oneOf(
    [true],
    'You must agree to the terms and conditions'
  ),
});

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousData = location.state?.orderData;
  const dispatch = useAppDispatch();
  const cartItems = store.getState().shoppingCart.items;
  const handleSubmit = (values: typeof initialValues) => {
    const finalOrderData = {
      ...previousData,
      ...values,
      items: cartItems,
    };

    console.log('FULL ORDER DATA:', finalOrderData);
    dispatch(clearCart());
    navigate('/order-success');
  };

  return (
    <section className={s.sectionCheckoutPage}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.paymentForm}>
          <h2 className={s.paymentTitle}>Payment</h2>
          <p className={s.checkoutDescription}>
            All transactions are secure and encrypted
          </p>

          <PaymentMethodForm />
          <CartInfoForm />
          <AgreementCheckbox />

          <button type="submit" className={s.orderBtn}>
            Pay
          </button>
          <button
            type="button"
            onClick={() => navigate('/delivery')}
            className={s.returnBtn}
          >
            Return
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default Checkout;
