import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Experience = ({ nextStep, prevStep, handleChange, values }) => {
  const navigate = useNavigate();
  const [rows, setRows] = useState(values.experiences || [{ company: '', title: '', project: '', from: '', to: '' }]);

  const addRow = () => {
    setRows([...rows, { company: '', title: '', project: '', from: '', to: '' }]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const formik = useFormik({
    initialValues: {
      experiences: rows
    },
    validationSchema: Yup.object({
      experiences: Yup.array().of(
        Yup.object({
          company: Yup.string().required('Required'),
          title: Yup.string().required('Required'),
          project: Yup.string().required('Required'),
          from: Yup.date().required('Required'),
          to: Yup.date().required('Required')
        })
      )
    }),
    onSubmit: (values) => {
      nextStep();
      handleChange(values);
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h6">Experience</Typography>
      {rows.map((row, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id={`experiences[${index}].company`}
              name={`experiences[${index}].company`}
              label="Company Name"
              value={formik.values.experiences[index]?.company || ''}
              onChange={formik.handleChange}
              error={formik.touched.experiences && Boolean(formik.errors.experiences?.[index]?.company)}
              helperText={formik.touched.experiences && formik.errors.experiences?.[index]?.company}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id={`experiences[${index}].title`}
              name={`experiences[${index}].title`}
              label="Title"
              value={formik.values.experiences[index]?.title || ''}
              onChange={formik.handleChange}
              error={formik.touched.experiences && Boolean(formik.errors.experiences?.[index]?.title)}
              helperText={formik.touched.experiences && formik.errors.experiences?.[index]?.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id={`experiences[${index}].project`}
              name={`experiences[${index}].project`}
              label="Project"
              value={formik.values.experiences[index]?.project || ''}
              onChange={formik.handleChange}
              error={formik.touched.experiences && Boolean(formik.errors.experiences?.[index]?.project)}
              helperText={formik.touched.experiences && formik.errors.experiences?.[index]?.project}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id={`experiences[${index}].from`}
              name={`experiences[${index}].from`}
              label="From"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formik.values.experiences[index]?.from || ''}
              onChange={formik.handleChange}
              error={formik.touched.experiences && Boolean(formik.errors.experiences?.[index]?.from)}
              helperText={formik.touched.experiences && formik.errors.experiences?.[index]?.from}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              id={`experiences[${index}].to`}
              name={`experiences[${index}].to`}
              label="To"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formik.values.experiences[index]?.to || ''}
              onChange={formik.handleChange}
              error={formik.touched.experiences && Boolean(formik.errors.experiences?.[index]?.to)}
              helperText={formik.touched.experiences && formik.errors.experiences?.[index]?.to}
            />
            <IconButton onClick={() => removeRow(index)} disabled={rows.length <= 1}>
              <Remove />
            </IconButton>
            <IconButton onClick={addRow}>
              <Add />
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

export default Experience;
