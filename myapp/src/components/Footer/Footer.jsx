import { AppBar, Toolbar, Typography } from '@mui/material';
import './Footer.scss';

function Footer() {
  return (
    <AppBar position="static" className="footer">
      <Toolbar className="toolbar">
        <Typography variant="body1" className="text">
          &copy;  Copyright Jewar International Technologies Pvt. Ltd.. All Rights Reserved
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;