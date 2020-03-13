import React, { useState } from 'react';

import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as IconPerson } from '../../img/icon-person.svg';
import { ReactComponent as IconCog } from '../../img/icon-cog.svg';
import { ReactComponent as IconChart } from '../../img/icon-chart.svg';
import { ReactComponent as BgBottom } from '../../img/bg-pattern-contact-2.svg';

const formSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Please use a valid email address')
    .required('This field is required'),
  message: Yup.string().required('This field is required')
});

export default () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: 'https://formspree.io/xqkbvzej',
      data: values
    })
      .then(res => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          'Thanks for submitting, we will get you back as soon as possible'
        );
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section>
      <h1 className='header-title'>
        Contact <br />
        <span className='subtitle'>Ask us about</span>
      </h1>
      <div>
        <IconPerson />
        <p>The quality of our talent network</p>
      </div>
      <div>
        <IconCog />
        <p>Usage & implementation of our software</p>
      </div>
      <div>
        <IconChart />
        <p>How we help drive innovation</p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          company: '',
          title: '',
          message: ''
        }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form className='form' noValidate>
            <Field type='text' id='name' name='name' placeholder='Name' />
            <ErrorMessage name='name' className='errorMsg' component='small' />
            <Field
              type='email'
              id='email'
              name='email'
              placeholder='Email Address'
            />
            <ErrorMessage name='email' className='errorMsg' component='small' />
            <Field
              type='text'
              id='company'
              name='company'
              placeholder='Company Name'
            />
            <ErrorMessage
              name='company'
              className='errorMsg'
              component='small'
            />
            <Field type='text' id='title' name='title' placeholder='Title' />
            <ErrorMessage name='title' className='errorMsg' component='small' />
            <Field
              id='message'
              name='message'
              rows='5'
              placeholder='Message'
              component='textarea'
            />
            <ErrorMessage
              name='message'
              className='errorMsg'
              component='small'
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='submit-btn'
            >
              submit
            </button>
            {serverState && (
              <p className={!serverState.ok ? 'errorMsg' : 'okMsg'}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
        <BgBottom />
      </Formik>
    </section>
  );
};
