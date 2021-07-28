import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';

import FormikTextField from '.';

const withFormik = (initialValues, formikProps) => (storyFn) => (
  <Formik initialValues={initialValues} {...formikProps}>
    {storyFn()}
  </Formik>
);

export default {
  title: 'Atoms/FormikTextField',
  component: FormikTextField,
};

export const Default = () => {
  return <FormikTextField name="firstName" label="Firstname" />;
};

Default.decorators = [withFormik({ firstName: 'Maurice'})];

export const Empty = () => {
  return <FormikTextField name="firstName" label="Firstname" />;
};

Empty.decorators = [withFormik({ firstName: ''})];

export const WithError  = () => {
  return (
    <FormikTextField
      name="firstName"
      label="Firstname"
    />
  );
}

WithError.decorators = [
  withFormik(
    { firstName: '' },
    {
      validationSchema: yup.object().shape({
        firstName: yup.string().required('Firstname is required'),
      }),
      validateOnMount: true,
    }
  ),
];