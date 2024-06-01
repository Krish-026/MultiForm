import React from 'react';
import { Box, Typography } from '@mui/material';
import './About.scss'; // Import the SCSS file

function About() {
  return (
    <Box className="about-container">
      <Typography variant="h4" className="company-name">
        Jewar International Technologies Private Limited
      </Typography>
      <Typography variant="subtitle1" className="subtitle">
        About Us
      </Typography>
      <Typography variant="body1" className="regular-text">
        Jewar International Technologies Private Limited is a cutting-edge IT service based company that specializes in mobile application development and website development. Our team is comprised of highly skilled and experienced professionals who are dedicated to delivering innovative solutions that meet the needs of our clients.
      </Typography>
      <Typography variant="body1" className="regular-text">
        At Jewar International Technologies, we are committed to providing our clients with the highest quality services that are tailored to their unique needs. Our team of developers and designers work closely with our clients to understand their requirements and deliver solutions that exceed their expectations.
      </Typography>
      <Typography variant="body1" className="regular-text">
        We take pride in our ability to deliver solutions that are not only functional but also aesthetically pleasing. Our team of designers work tirelessly to ensure that every project we undertake is visually appealing and user-friendly.
      </Typography>
      <Typography variant="body1" className="regular-text">
        Jewar International Technologies is a registered company, having been incorporated in June 2022. We have quickly established ourselves as a reliable and trustworthy partner for businesses looking to leverage technology to grow and succeed.
      </Typography>
      <Typography variant="body1" className="regular-text">
        At Jewar International Technologies, we are constantly innovating and striving to stay ahead of the curve. We are passionate about technology and are committed to providing our clients with the most cutting-edge solutions available.
      </Typography>
      <Typography variant="body1" className="regular-text">
        If you are looking for a partner to help you develop mobile applications or websites that are tailored to your unique needs, look no further than Jewar International Technologies. Contact us today to learn more about our services and how we can help you achieve your business goals.
      </Typography>
      <Typography variant="body1" className="contact-info">
        Contact us at: contact@jewar.com
      </Typography>
    </Box>
  );
}

export default About;
