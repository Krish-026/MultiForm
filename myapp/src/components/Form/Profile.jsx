import React from 'react';
import { Box, Typography, Button, Avatar, Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
const Profile = ({ values, prevStep }) => {
    return (
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
                        <Typography variant="subtitle1">Image:</Typography>
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

                    {values.qualifications.map((qualification, index) => (
                        <Box key={index} mb={2} >
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
                    {values.experiences.map((experience, index) => (
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
            <Box mt={2}>
                <Link to="/profile">
                    <Button variant="contained" color="primary">
                        Go To Profile
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Profile;
