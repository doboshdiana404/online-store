import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import ProgressReview from '@/ui/ProgressReview/ProgressReview';
import { StarRating } from '@/ui/StarRating/StarRating';

import ReviewCard from '../Product/components/ReviewCard/ReviewCard';
import { REVIEW_FACE } from '../Product/data';

import { PROGRESS_REVIEW } from './data';
import styles from './Review.module.css';

const Review = () => {
  return (
    <section className={styles.review}>
      <div className="container">
        <div className={styles.wrapper}>
          <Breadcrumbs
            variant="crumbs_dark"
            crumbs={[
              {
                link: '/product/:productId',
                name: 'Crunchy Hazelnut Milk Bar /',
              },
              { link: '/', name: 'Reviews' },
            ]}
          />
          <h1>Reviews</h1>
          <section className={styles.reviews}>
            <aside className={styles.aside}>
              <div className={styles.rating}>
                <p className={styles.rating_title}>4.8</p>
                <StarRating rating={4.8} />
                <p className={styles.rating_subtitle}>24 ratings</p>
              </div>
              <div className={styles['progress-list']}>
                {PROGRESS_REVIEW.map((item) => (
                  <ProgressReview key={item.rating} {...item} />
                ))}
              </div>
              <Button variant={Variant.Card} text="Write review" />
            </aside>
            <main className={styles['review-list']}>
              {REVIEW_FACE.slice(0, 4).map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </main>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Review;
