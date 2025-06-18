import { useFormContext } from 'react-hook-form';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={s.wrapper}>
      <h2 className={s.contactFormTitle}>Contact</h2>
      <div className={s.form}>
        <div className={s.field}>
          <label htmlFor="firstName">Name</label>
          <input
            {...register('firstName')}
            type="text"
            placeholder="First Name"
            className={s.contactFormInput}
          />
          {typeof errors.firstName?.message === 'string' && (
            <div className={s.error}>{errors.firstName.message}</div>
          )}
        </div>

        <div className={s.field}>
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register('lastName')}
            type="text"
            placeholder="Last Name"
            className={s.contactFormInput}
          />
          {typeof errors.lastName?.message === 'string' && (
            <div className={s.error}>{errors.lastName.message}</div>
          )}
        </div>

        <div className={s.field}>
          <label htmlFor="phone">Phone</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Phone number"
            className={s.contactFormInput}
          />
          {typeof errors.phone?.message === 'string' && (
            <div className={s.error}>{errors.phone.message}</div>
          )}
        </div>

        <div className={s.field}>
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className={s.contactFormInput}
          />
          {typeof errors.email?.message === 'string' && (
            <div className={s.error}>{errors.email.message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
