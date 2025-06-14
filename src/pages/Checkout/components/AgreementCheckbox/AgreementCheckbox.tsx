import { useFormikContext, ErrorMessage } from 'formik';

import CustomRadio from '@/pages/Delivery/components/CustomRadio/CustomRadio';

import { CheckoutFormValues } from '../types/forms';

import s from './AgreementCheckbox.module.css';

const AgreementCheckbox = () => {
  const { values, setFieldValue } = useFormikContext<CheckoutFormValues>();

  return (
    <div className={s.agreement}>
      <CustomRadio
        name="agreement"
        checked={values.agreement}
        value="true"
        onChange={(e) => setFieldValue('agreement', e.target.checked)}
        checkedIcon="/burger/check.svg"
        label="I have read and understand the Privacy Policy*"
        type="checkbox"
      />
      <ErrorMessage name="agreement" component="div" className={s.error} />
    </div>
  );
};

export default AgreementCheckbox;
