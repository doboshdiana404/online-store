import { EmblaOptionsType } from 'embla-carousel';
import { useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import ProductSlider from '@/modules/ProductSlider/ProductSlider';
import Slider from '@/modules/Slider/Slider';

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ProductCard from '@/components/ProductCard/ProductCard';

import Link from '@/ui/Link/Link';

import ReviewCard from './components/ReviewCard/ReviewCard';
import { PRODUCT_FACE, REVIEW_FACE } from './data';
import ProductControl from './modules/ProductControl/ProductControl';
import ProductDescription from './modules/ProductDescription/ProductDescription';
import styles from './Product.module.css';

import {
  useGetLatestProductQuery,
  useGetProductByIdQuery,
} from '@/redux/services/products';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDER_OPTIONS: EmblaOptionsType = {
  loop: true,
  startIndex: 0,
  align: 'start',
};

const Product = () => {
  const isSuccessReview = true;
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isSuccess } = useGetProductByIdQuery(
    productId ?? skipToken
  );
  const { data: latests, isSuccess: isSuccessLatests } =
    useGetLatestProductQuery();

  const imageSlides = [
    product?.mainProductImage ?? '',
    ...(product?.productImages ?? ''),
  ];
  return (
    <section className={styles.product}>
      <div className="container">
        <div className={styles.wrapper}>
          <Breadcrumbs
            variant="crumbs_dark"
            crumbs={[
              { link: '/catalog', name: 'Shop /' },
              { link: '/', name: product?.name ?? '' },
            ]}
          />
          {isSuccess && (
            <div className={styles.header}>
              <ProductSlider slides={imageSlides} options={OPTIONS} />
              <ProductControl
                name={product.name}
                price={product.price}
                id={product.id}
                mainImageBaseName={product.mainProductImage}
                stockQuantity={product.stockQuantity}
              />
              <ProductDescription title={product.name} {...PRODUCT_FACE} />
            </div>
          )}
          {isSuccessReview && (
            <section className={styles.reviews}>
              <h2>Reviews</h2>
              <Slider options={SLIDER_OPTIONS} isButton variant="review">
                {REVIEW_FACE.map(({ id, ...review }) => (
                  <ReviewCard key={id} {...review} />
                ))}
              </Slider>
              <Link to={`/review/${productId}`} variant="review">
                <p>See all reviews</p>
                <svg>
                  <use href="/sprite.svg#review" />
                </svg>
              </Link>
            </section>
          )}
          {isSuccessLatests && (
            <section className={styles.like}>
              <h2>You may also like</h2>
              <Slider options={SLIDER_OPTIONS} isButton variant="product">
                {latests.map((latest) => (
                  <ProductCard key={latest.id} {...latest} />
                ))}
              </Slider>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
