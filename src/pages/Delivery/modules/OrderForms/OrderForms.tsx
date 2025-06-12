import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import ContactForm from '../../components/ContactForm/ContactForm';
import DeliveryMethodForm from '../../components/DeliveryMethodForm/DeliveryMethodForm';
import PaymentMethodForm from '../../components/PaymentMethodForm/PaymentMethodForm';

import s from './OrderForm.module.css';

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  paymentMethod: '',
  deliveryMethod: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  phone: Yup.string().required('Required field'),
  email: Yup.string().email('Incorrect email').required('Required field'),
  paymentMethod: Yup.string().required('Choose a payment method'),
  deliveryMethod: Yup.string().required('Choose a delivery method'),
});

const OrderForm = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log('Дані форми:', values);
  };
  const navigate = useNavigate();
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
