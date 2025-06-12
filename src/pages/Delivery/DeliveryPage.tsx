import s from './DeliveryPage.module.css';
import CartList from './modules/CartList/CartList';
import OrderForms from './modules/OrderForms/OrderForms';

const DeliveryPage = () => {
  return (
    <section className={s.sectionDeliveryPage}>
      <h2 className={s.deliveryPageTitle}>My cart</h2>
      <div className={s.deliveryPageWrap}>
        <CartList />
        <OrderForms />
      </div>
    </section>
  );
};

export default DeliveryPage;
