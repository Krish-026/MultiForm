import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Qualification = ({ nextStep, prevStep, handleChange, values }) => {
  const [rows, setRows] = useState(values.qualifications || [
    { standard: '', score: '', percentage: '', institution: '' },
    { standard: '', score: '', percentage: '', institution: '' },
    { standard: '', score: '', percentage: '', institution: '' }
  ]);

  useEffect(() => {
    formik.setValues({ qualifications: rows });
  }, [rows]);

  const addRow = () => {
    if (rows.length < 4) {
      setRows([...rows, { standard: '', score: '', percentage: '', institution: '' }]);
    }
  };

  const removeRow = (index) => {
    if (rows.length > 3) {
      setRows(rows.filter((_, i) => i !== index));
    }
  };

  const formik = useFormik({
    initialValues: {
      qualifications: rows
    },
    validationSchema: Yup.object({
      qualifications: Yup.array().of(
        Yup.object({
          standard: Yup.string().required('Required'),
          score: Yup.number().required('Required').min(0).max(100),
          percentage: Yup.number().required('Required').min(0).max(100),
          institution: Yup.string().required('Required')
        })
      )
    }),
    onSubmit: (values) => {
      handleChange(values);
      nextStep();
    }
  });

  const calculatePercentage = (score) => {
    return (score / 100) * 100; // Simplified for demonstration
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h6">Qualification</Typography>
      {formik.values.qualifications.map((qualification, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id={`qualifications[${index}].standard-label`}>Standard</InputLabel>
              <Select
                labelId={`qualifications[${index}].standard-label`}
                id={`qualifications[${index}].standard`}
                name={`qualifications[${index}].standard`}
                value={formik.values.qualifications[index].standard}
                onChange={formik.handleChange}
                error={formik.touched.qualifications && Boolean(formik.errors.qualifications?.[index]?.standard)}
              >
                <MenuItem value="High School">High School</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Graduation">Graduation</MenuItem>
                <MenuItem value="Post Graduation">Post Graduation</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id={`qualifications[${index}].score`}
              name={`qualifications[${index}].score`}
              label="Score"
              type="number"
              value={formik.values.qualifications[index].score}
              onChange={(e) => {
                formik.handleChange(e);
                const percentage = calculatePercentage(Number(e.target.value));
                formik.setFieldValue(`qualifications[${index}].percentage`, percentage);
              }}
              error={formik.touched.qualifications && Boolean(formik.errors.qualifications?.[index]?.score)}
              helperText={formik.touched.qualifications && formik.errors.qualifications?.[index]?.score}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id={`qualifications[${index}].percentage`}
              name={`qualifications[${index}].percentage`}
              label="Percentage"
              value={formik.values.qualifications[index].percentage}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id={`qualifications[${index}].institution`}
              name={`qualifications[${index}].institution`}
              label="Institution"
              value={formik.values.qualifications[index].institution}
              onChange={formik.handleChange}
              error={formik.touched.qualifications && Boolean(formik.errors.qualifications?.[index]?.institution)}
              helperText={formik.touched.qualifications && formik.errors.qualifications?.[index]?.institution}
            />
            <IconButton onClick={() => removeRow(index)} disabled={rows.length <= 3}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={addRow} disabled={rows.length >= 4}>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" type="submit" style={{ marginLeft: '10px' }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Qualification;
