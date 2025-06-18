import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import ContactForm from '../../components/ContactForm/ContactForm';
import DeliveryMethodForm from '../../components/DeliveryMethodForm/DeliveryMethodForm';
import PaymentMethodForm from '../../components/PaymentMethodForm/PaymentMethodForm';

import s from './OrderForm.module.css';

import { useAppDispatch } from '@/redux/hooks';
import { clearCart } from '@/redux/slices/shoppingCartSlice';
import { store } from '@/redux/store';

const schema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(30, 'First name must be at most 30 characters')
    .regex(
      /^[A-Za-z'-]+$/,
      'First name must contain only letters, apostrophes, or hyphens'
    ),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(30, 'Last name must be at most 30 characters')
    .regex(
      /^[A-Za-z'-]+$/,
      'Last name must contain only letters, apostrophes, or hyphens'
    ),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be at most 15 digits')
    .regex(/^\+?[0-9\s\-()]+$/, 'Phone number is invalid'),
  email: z.string().email('Please enter a valid email address'),
  paymentMethod: z.string().min(1, 'Choose a payment method'),
  deliveryMethod: z.string().min(1, 'Choose a delivery method'),
  courierComment: z.string().optional(),
  novaPostBranch: z.string().optional(),
  areaRef: z.string().optional(),
  cityRef: z.string().optional(),
  warehouseRef: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const OrderForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
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
    },
    mode: 'all',
  });

  const onSubmit = (values: FormValues) => {
    const cartItems = store.getState().shoppingCart.items;
    const finalOrderData = { ...values, items: cartItems };

    if (values.paymentMethod === 'credit') {
      navigate('/checkout', { state: { orderData: finalOrderData } });
    } else {
      console.log('FULL ORDER DATA (cash):', finalOrderData);
      dispatch(clearCart());
      navigate('/order-success');
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={s.globalFormWrap}
      >
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
      </form>
    </FormProvider>
  );
};

export default OrderForm;
