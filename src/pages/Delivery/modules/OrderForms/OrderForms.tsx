import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import ContactForm from '../../components/ContactForm/ContactForm';
import DeliveryMethodForm from '../../components/DeliveryMethodForm/DeliveryMethodForm';
import PaymentMethodForm from '../../components/PaymentMethodForm/PaymentMethodForm';

import s from './OrderForm.module.css';

import { useAppDispatch } from '@/redux/hooks';
import { clearCart } from '@/redux/slices/shoppingCartSlice';
import { store } from '@/redux/store';

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  paymentMethod: '',
  deliveryMethod: '',
  courierComment: '',
  novaPostBranch: '',
  areaRef: '',
  cityRef: '',
  warehouseRef: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  phone: Yup.string().required('Required field'),
  email: Yup.string().email('Incorrect email').required('Required field'),
  paymentMethod: Yup.string().required('Choose a payment method'),
  deliveryMethod: Yup.string().required('Choose a delivery method'),
  courierComment: Yup.string().when('deliveryMethod', {
    is: 'courier',
    then: (schema) => schema.required('Please enter a comment for courier'),
  }),
  novaPostBranch: Yup.string().when('deliveryMethod', {
    is: 'nova_poshta',
    then: (schema) => schema.required('Please enter branch number'),
  }),
});
const OrderForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = (values: typeof initialValues) => {
    const cartItems = store.getState().shoppingCart.items;

    const finalOrderData = {
      ...values,
      items: cartItems,
    };

    if (values.paymentMethod === 'credit') {
      navigate('/checkout', { state: { orderData: finalOrderData } });
    } else {
      console.log('FULL ORDER DATA (cash):', finalOrderData);
      dispatch(clearCart());
      navigate('/order-success');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.globalFormWrap}>
        <ContactForm />
        <PaymentMethodForm />
        <DeliveryMethodForm />

        <button type="submit" className={s.orderBtn}>
          Place order
        </button>

        <button
          type="button"
          onClick={() => navigate('/catalog')}
          className={s.continueBtn}
        >
          Continue shopping
        </button>
      </Form>
    </Formik>
  );
};

export default OrderForm;
