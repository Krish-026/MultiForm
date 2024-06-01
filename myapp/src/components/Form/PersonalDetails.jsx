import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Grid,
    Box,
    Typography
} from '@mui/material';

const stateOptions = [
    { value: 'UP', label: 'Uttar Pradesh' },
    { value: 'MP', label: 'Madhya Pradesh' }
];

const cityOptions = {
    UP: [
        { value: 'Lucknow', label: 'Lucknow' },
        { value: 'Kanpur', label: 'Kanpur' }
    ],
    MP: [
        { value: 'Bhopal', label: 'Bhopal' },
        { value: 'Indore', label: 'Indore' }
    ]
};

const PersonalDetails = ({ nextStep, handleChange, values }) => {
    const [cities, setCities] = useState([]);

    const formik = useFormik({
        initialValues: {
            name: values.name || '',
            email: values.email ||'',
            contact: values.contact || '',
            dob: values.dob ||'',
            state: values.state || '',
            city: values.city || '',
            age: values.age || '',
            image: values.image || null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            contact: Yup.string().required('Required'),
            dob: Yup.date().required('Required'),
            state: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            image: Yup.mixed().required('Required')
        }),
        onSubmit: (values) => {
            nextStep();
            handleChange(values);
        }
    });

    useEffect(() => {
        if (formik.values.state) {
            setCities(cityOptions[formik.values.state]);
        }
    }, [formik.values.state]);

    useEffect(() => {
        if (formik.values.dob) {
            const age = calculateAge(formik.values.dob);
            formik.setFieldValue('age', age);
        }
    }, [formik.values.dob]);

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Typography variant="h6">Personal Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="contact"
                        name="contact"
                        label="Contact"
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        error={formik.touched.contact && Boolean(formik.errors.contact)}
                        helperText={formik.touched.contact && formik.errors.contact}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="dob"
                        name="dob"
                        label="Date of Birth"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.dob}
                        onChange={(e) => {
                            formik.handleChange(e);
                            const age = calculateAge(e.target.value);
                            formik.setFieldValue('age', age);
                        }}
                        error={formik.touched.dob && Boolean(formik.errors.dob)}
                        helperText={formik.touched.dob && formik.errors.dob}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="age"
                        name="age"
                        label="Age"
                        value={formik.values.age}
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="state-label">State</InputLabel>
                        <Select
                            labelId="state-label"
                            id="state"
                            name="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                        >
                            {stateOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="city-label">City</InputLabel>
                        <Select
                            labelId="city-label"
                            id="city"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                        >
                            {cities.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="image"
                        name="image"
                        type="file"
                        onChange={(event) => {
                            formik.setFieldValue("image", event.currentTarget.files[0]);
                        }}
                        error={formik.touched.image && Boolean(formik.errors.image)}
                        helperText={formik.touched.image && formik.errors.image}
                    />
                </Grid>
            </Grid>
            <Box mt={2}>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default PersonalDetails;
