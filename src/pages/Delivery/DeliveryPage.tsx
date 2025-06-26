import { useNavigate } from 'react-router-dom';

import s from './DeliveryPage.module.css';
import CartList from './modules/CartList/CartList';
import OrderForms from './modules/OrderForms/OrderForms';

import { useAppSelector } from '@/redux/hooks';
import { selectCartItems } from '@/redux/slices/shoppingCartSlice';

const DeliveryPage = () => {
  const cartItems = useAppSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <section className={s.sectionDeliveryPage}>
      <h2 className={s.deliveryPageTitle}>Your cart</h2>
      <div className={s.deliveryPageWrap}>
        <CartList />

        {cartItems.length > 0 && <OrderForms />}
      </div>
      {cartItems.length == 0 && (
        <div className={s.emptyCart}>
          <p>Your cart is empty.</p>
          <button
            type="button"
            onClick={() => navigate('/catalog')}
            className={s.continueBtn}
          >
            Continue shopping
          </button>
        </div>
      )}
    </section>
  );
};

export default DeliveryPage;
