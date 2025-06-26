import { useFormContext, Controller } from 'react-hook-form';

import CustomRadio from '@/pages/Delivery/components/CustomRadio/CustomRadio';

import s from './AgreementCheckbox.module.css';

const AgreementCheckbox = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: boolean) => void
  ) => {
    onChange(e.target.checked);
  };

  return (
    <div className={s.agreement}>
      <Controller
        name="agreement"
        control={control}
        render={({ field }) => (
          <CustomRadio
            {...field}
            checked={field.value}
            onChange={(e) => handleChange(e, field.onChange)}
            checkedIcon="/burger/check.svg"
            label="I have read and understand the Privacy Policy*"
            type="checkbox"
          />
        )}
      />

      {typeof errors.agreement?.message === 'string' && (
        <div className={s.error}>{errors.agreement.message}</div>
      )}
    </div>
  );
};

export default AgreementCheckbox;
