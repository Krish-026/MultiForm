import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Contact = () => {
    return (
        <Box p={3} justifyContent="flex-start" alignItems="center" display="flex" flexDirection="column">
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Typography variant="body1" gutterBottom>
                <strong>Phone:</strong> +91 9053252588
            </Typography>
            <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> <Link href="mailto:contact@jewarinternational.com">contact@jewarinternational.com</Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <strong>Address:</strong> Ground floor, B-84, B Block, Sector 64, Noida, Uttar Pradesh 201301
            </Typography>
            <Typography variant="body1" gutterBottom>
                <Link href="/privacy-policy">Privacy Policy</Link>
            </Typography>
        </Box>
    );
};

export default Contact;
