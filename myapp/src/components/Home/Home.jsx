import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
        <h1>Welcome to JIT : </h1>
        <Link to="/form">
          <Button variant="contained" color="primary">
            Go to Form
          </Button>
        </Link>
    </div>
  );
}

export default Home;
