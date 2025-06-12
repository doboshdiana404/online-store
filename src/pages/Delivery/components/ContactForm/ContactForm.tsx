import React from 'react';

import { ErrorMessage, Field } from 'formik';

import s from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.contactFormTitle}>Contact</h2>

      <div className={s.form}>
        <div className={s.field}>
          <label htmlFor="firstName">Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="First Name"
            className={s.contactFormInput}
          />
          <ErrorMessage name="firstName" component="div" className={s.error} />
        </div>

        <div className={s.field}>
          <label htmlFor="lastName" style={{ marginBottom: '0' }}></label>
          <Field
            name="lastName"
            type="text"
            placeholder="Last Name"
            className={s.contactFormInput}
          />
          <ErrorMessage name="lastName" component="div" className={s.error} />
        </div>

        <div className={s.field}>
          <label htmlFor="phone">Phone</label>
          <Field
            name="phone"
            type="tel"
            placeholder="Phone number"
            className={s.contactFormInput}
          />
          <ErrorMessage name="phone" component="div" className={s.error} />
        </div>

        <div className={s.field} style={{ marginBottom: '0' }}>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            className={s.contactFormInput}
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" className={s.error} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
