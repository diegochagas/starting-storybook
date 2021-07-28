import React from 'react';
import * as yup from 'yup';
import withFormik from 'storybook-formik';

import FormikTextField from '../FormikTextField';

export default {
  title: 'Atoms/FormikTextField with storybook-formik',
  component: FormikTextField,
  decorators: [withFormik],
};

export const Default = () => {
  return <FormikTextField name="firstName" label="First Name" />;
};

Default.story = {
  parameters: {
    formik: {
      initialValues: {
        firstName: 'John',
      },
    },
  },
};

export const Empty = () => {
  return <FormikTextField name="firstName" label="First Name" />;
};

Empty.story = {
  parameters: {
    formik: {
      initialValues: {
        firstName: '',
      },
    },
  },
};

export const WithError = () => {
  return <FormikTextField name="firstName" label="First Name" />;
};

WithError.story = {
  parameters: {
    formik: {
      initialValues: {
        firstName: '',
      },
      validationSchema: yup.object({
        firstName: yup.string().required(),
      }),
      validateOnMount: true,
    },
  },
};
