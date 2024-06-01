import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, Container, Paper } from '@mui/material';
import PersonalDetails from './PersonalDetails';
import Qualification from './Qualification';
import Experience from './Experience';
import Profile from './Profile';
import './Form.scss'
import { updateFormData } from '../../redux/slice/formSlice';
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  const dispatch = useDispatch();
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (values) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...values
    }));
    };
    dispatch(updateFormData(formValues))
    console.log("formValues", formValues)

  const steps = [
    <PersonalDetails key="personal" nextStep={nextStep} handleChange={handleChange} values={formValues} />,
    <Qualification key="qualification" nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />,
    <Experience key="experience" nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />,
      <Profile key="profile" values={formValues} prevStep={prevStep} />
  ];

  return (
    <Container style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box>
          <Typography variant="h4" gutterBottom>Multi-Step Form</Typography>
          {steps[step - 1]}
        </Box>
      </Paper>
    </Container>
  );
};

export default MultiStepForm;
