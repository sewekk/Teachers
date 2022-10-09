import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledForm } from './index.styled';
import FormControl from '../../Molecues/FormControl/index';
import BaseButton from '../../Atoms/BaseButton/index';
import { BASE_URL } from '../../../config/api.config';
import axios from 'axios';

const initialFormValues = {
  name: '',
  lastName: '',
  message: '',
  eMail: '',
};

let afterRequestMessage = '';

const ContactForm = () => {
  const [formValues, SetValues] = useState(initialFormValues);
  const [validated, setValidate] = useState(true);
  const [requestState, setRequestState] = useState(false);
  const { teacherID } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRequestState(false);

    try {
      await validateFormSubmit();
      setValidate(true);
      sendRequest();
    } catch (error) {
      setValidate(false);
    }
  };

  const validateFormSubmit = () => {
    return new Promise((resolve, reject) => {
      Object.keys(formValues).forEach((value) => {
        if (value === '') reject();
      });

      formValues.eMail.includes('@') ? resolve() : reject();
    });
  };

  const sendRequest = () => {
    axios
      .post(`${BASE_URL}/requests/${teacherID}.json`, JSON.stringify(formValues))
      .then(() => {
        afterRequestMessage = 'Your message was send';
        setRequestState(true);
      })
      .catch(() => {
        afterRequestMessage = 'Something went wrong try again later';
        setRequestState(true);
      });
  };

  const handleInputChange = (e) => {
    SetValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validationMessage = () => {
    return validated ? '' : <p>Enter correct data</p>;
  };

  const requestMessage = () => {
    return requestState ? <p>{afterRequestMessage}</p> : '';
  };

  return (
    <>
      <h2 className="title">Reach out your Teacher</h2>
      <StyledForm onSubmit={handleSubmit}>
        <FormControl label="Name" name="name" id="name" value={formValues.name} onChange={handleInputChange} />
        <FormControl label="Last Name" name="lastName" id="last-name" value={formValues.lastName} onChange={handleInputChange} />
        <FormControl label="Message" name="message" id="message" value={formValues.message} onChange={handleInputChange} />
        <FormControl label="E-mail" name="eMail" id="e-mail" value={formValues.eMail} onChange={handleInputChange} />
        <BaseButton title="Contact" primary={true} type="submit" value={formValues.name} />
      </StyledForm>
      {validationMessage()}
      {requestMessage()}
    </>
  );
};

export default ContactForm;
