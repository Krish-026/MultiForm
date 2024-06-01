import React, { useEffect } from 'react';
import { Box, Typography, Avatar, Paper, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFormData } from '../../redux/slice/formSlice';

const Profile = () => {
    const values = useSelector(selectFormData);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!values?.name) {
    //         navigate('/');
    //     }
    // }, [values, navigate]);

    const handleAddDetails = () => {
        navigate('/'); // Navigate to the form step or home page
    };

    return (
        <Box style={{padding: '20px'}}>
            {values.name !== undefined && (
                <Box>
                    <Typography variant="h4" className='color textAlign'>Profile</Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={2} className='color avatar'>
                        {values.image && (
                            <Avatar alt="Profile Picture" src={URL.createObjectURL(values.image)} sx={{ width: 150, height: 150 }} />
                        )}
                    </Box>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant='h5'>Personal Details</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Paper elevation={3} variant="outlined" sx={{ padding: '12px' }}>
                                <Typography variant="subtitle1">Name: {values.name}</Typography>
                                <Typography variant="subtitle1">Email: {values.email}</Typography>
                                <Typography variant="subtitle1">Contact: {values.contact}</Typography>
                                <Typography variant="subtitle1">DOB: {values.dob}</Typography>
                                <Typography variant="subtitle1">Age: {values.age}</Typography>
                                <Typography variant="subtitle1">State: {values.state}</Typography>
                                <Typography variant="subtitle1">City: {values.city}</Typography>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography variant='h5'>Qualifications</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {values.qualifications && values.qualifications.map((qualification, index) => (
                                <Box key={index} mb={2}>
                                    <Paper elevation={3} variant="outlined" sx={{ padding: '12px' }}>
                                        <Typography variant="subtitle1">Standard: {qualification.standard}</Typography>
                                        <Typography variant="subtitle1">Score: {qualification.score}</Typography>
                                        <Typography variant="subtitle1">Percentage: {qualification.percentage}</Typography>
                                    </Paper>
                                </Box>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography variant='h5'>Experiences</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {values.experiences && values.experiences.map((experience, index) => (
                                <Box key={index} mb={2}>
                                    <Paper elevation={3} variant="outlined" sx={{ padding: '12px' }}>
                                        <Typography variant="subtitle1">Company: {experience.company}</Typography>
                                        <Typography variant="subtitle1">Title: {experience.title}</Typography>
                                        <Typography variant="subtitle1">Project: {experience.project}</Typography>
                                        <Typography variant="subtitle1">From: {experience.from}</Typography>
                                        <Typography variant="subtitle1">To: {experience.to}</Typography>
                                    </Paper>
                                </Box>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            )}
            {
                values.name === undefined && (
                    <Box>
                        <Typography variant="h4" className='color textAlign'>No Profile Details Found</Typography>
                        <Box display="flex" justifyContent="center" mt={2}>
                            <Button variant="contained" color="primary" onClick={handleAddDetails}>
                                Add Details
                            </Button>
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
};

export default Profile;
