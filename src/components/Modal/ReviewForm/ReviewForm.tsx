import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import { RatingStars } from './RatingStars/RatingStars';
import styles from './ReviewForm.module.css';
import { FormData, schema } from './schema';

import { useAppDispatch } from '@/redux/hooks';
import { useCreateReviewMutation } from '@/redux/services/review';
import { toggleModal } from '@/redux/slices/modalSlice';

const ReviewForm = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();
  const [createReview] = useCreateReviewMutation();
  const onClose = () => {
    console.log('close');
    dispatch(toggleModal({ openedModalType: null }));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    if (!productId) return;
    try {
      const review = {
        ...data,
        productId: productId,
        userId: '1',
      };
      await createReview(review).unwrap();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRatingChange = (rating: number) => {
    setValue('rating', rating);
  };

  return (
    <section className={styles.reviewForm}>
      <h2>Write review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.reviewForm__rating}>
          <label>Rate the product</label>
          <RatingStars onRatingChange={handleRatingChange} />
          <input type="hidden" {...register('rating')} />
          {errors.rating && (
            <p className={styles.error}>{errors.rating.message}</p>
          )}
        </div>
        <div className={styles.reviewForm__comment}>
          <label htmlFor="comment">Review</label>
          <textarea {...register('comment')} />
          {errors.comment?.message && (
            <p className={styles.error}>{errors.comment.message}</p>
          )}
        </div>
        <div className={styles.btns}>
          <Button
            type="button"
            onClick={onClose}
            variant={Variant.ClearFilter}
            text="Close"
          />
          <Button
            type="submit"
            variant={Variant.Basic}
            text="Leave review"
            disabled={!isValid}
          />
        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
