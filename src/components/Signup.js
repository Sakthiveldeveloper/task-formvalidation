import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    phone: Yup.string()
      .min(10, 'Must be 10 characters or more')
      .max(12, 'Must be 12 characters or less')
      .required('phone is required'),
    country: Yup.string()
      .min(6, 'Must be 5 characters or more')
      .max(12, 'Must be 12 characters or less'),
    state: Yup.string()
      .min(6, 'Must be 10 characters or more')
      .max(12, 'Must be 12 characters or less'),
    city : Yup.string()
      .min(6, 'Must be 10 characters or more')
      .max(12, 'Must be 12 characters or less'),
    message : Yup.string()
      .min(10, 'Must be 10 characters or more')
      .max(60, 'Must be 12 characters or less'),
    // password: Yup.string()
    //   .min(6, 'Password must be at least 6 charaters')
    //   .required('Password is required'),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref('password'), null], 'Password must match')
    //   .required('Confirm password is required'),
    
  })
  return (
    <Formik
    initialValues={{
      firstName: '',
      phone: '',
      email: '',
      country: '',
      state: '',
      city: '',
      message: '',
    }}
    validationSchema={validate}
    onSubmit={values => {
      console.log(values)
    }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Fill your Details</h1>
          <Form>
            <TextField label="Name" name="firstName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Phone" name="phone" type="number" />
            <TextField label="country" name="country" type="text" />
            <TextField label="state" name="state" type="text" />
            <TextField label="city" name="city" type="text" />
            <TextField label="message" name="message" type="text" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
