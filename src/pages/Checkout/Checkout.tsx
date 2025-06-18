import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import s from './Checkout.module.css';
import AgreementCheckbox from './components/AgreementCheckbox/AgreementCheckbox';
import CartInfoForm from './components/CartInfoForm/CartInfoForm';
import PaymentMethodForm from './components/PaymentMethodForm/PaymentMethodForm';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearCart } from '@/redux/slices/shoppingCartSlice';

const schema = z.object({
  paymentSystem: z.string().min(1, 'Choose payment system'),
  cardNumber: z
    .string()
    .min(1, 'Card number is required')
    .transform((val) => val.replace(/\s/g, ''))
    .refine((val) => /^\d{16}$/.test(val), {
      message: 'Card number must be exactly 16 digits',
    }),
  expiryDate: z
    .string()
    .nonempty('Validity period is required')
    .regex(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      'Validity period must be in MM/YY format'
    ),
  cvv: z
    .string()
    .nonempty('CVV is required')
    .regex(/^\d{3}$/, 'CVV must be exactly 3 digits'),
  agreement: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type FormData = z.infer<typeof schema>;

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousData = location.state?.orderData;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.shoppingCart.items);

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      paymentSystem: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      agreement: false,
    },
    mode: 'all',
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: FormData) => {
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
      <FormProvider {...methods}>
        <form className={s.paymentForm} onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </FormProvider>
    </section>
  );
};

export default Checkout;
