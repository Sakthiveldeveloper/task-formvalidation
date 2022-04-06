import { Grid, TextField, Button, FormHelperText, Checkbox, FormControl, InputLabel, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    phone: Yup
    .number('Enter your phone number')
    .required('Your phone number'),
    country: Yup
    .string('Enter your country')
    .min(6, 'Too Short!')
    .max(10, 'Too Long!'),
    city : Yup
    .string('Enter your city')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
    state : Yup
    .string('Enter your state')
    .min(5, 'Too Short!')
    .max(20, 'Too Long!'),
    message : Yup
    .string('Enter your message')
    .min(8, 'Too Short!')
    .max(30, 'Too Long!'),
  });

const formMui = () => {
  
    return (
        <div>
            <h1>Fill your Details</h1>
            <div class="container">
            <Formik
          enableReinitialize={true}
          initialValues={
            {
              username:"",
              email:"",
              phone:"",
              country:"",
              state:"",
              city:"",
              message:"",
            }
          }
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
          

        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values }) => (
              <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={3}
                >

                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.username && errors.username)}
                      helperText={touched.username && errors.username}
                      label="Name"
                      name="username"
                      // required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // value={username}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                   <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      onBlur={handleBlur}
                    
                      inputProps={{
                        maxLength: 50,
                      }}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="mobile"
                      name="phone"
                      required
                      error={Boolean(touched.phone && errors.phone)}
                      helperText={touched.phone && errors.phone}
                      onBlur={handleBlur}
                      variant="outlined"
                      inputProps={{ maxLength: 10 }}
                    />
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Country"
                      name="country"
                      error={Boolean(touched.Country && errors.Country)}
                      helperText={touched.Country && errors.Country}
                      onBlur={handleBlur}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.city && errors.city)}
                      helperText={touched.city && errors.city}
                      onBlur={handleBlur}
                      label="City"
                      inputProps={{ maxLength: 20 }}
                      name="city"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.state && errors.state)}
                      helperText={touched.state && errors.state}
                      onBlur={handleBlur}
                      label="state"
                      inputProps={{ maxLength: 10 }}
                      name="state"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.message && errors.message)}
                      helperText={touched.message && errors.message}
                      onBlur={handleBlur}
                      label="message"
                      inputProps={{ maxLength: 10 }}
                      name="message"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={12}
                    xs={12}
                    style={{ textAlign: 'center' }}
                  >
                    
                        <Button
                          color="primary"
                          variant="contained"
                          // onClick={addEmployee}
                          type="submit"
                        >
                          Add
                        </Button>

                  </Grid>
                </Grid>
              </Form>
          )}
        </Formik>
            </div>
        </div>
    )
}
export default formMui