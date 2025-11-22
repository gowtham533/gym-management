import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';



function Header() {

    const projectInfo = "At Gym Forge, we believe strength isn’t just built — it’s forged. Our mission is to help you transform your body and mind through dedication, discipline, and expert guidance. Whether you’re a beginner taking your first step into fitness or an athlete pushing your limits, Gym Forge provides the perfect environment to achieve your goals. With top-quality equipment, certified trainers, and a community that motivates you every day, we’re here to shape the best version of you — one rep at a time."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'darkred'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'60px'} src="./public/gym logo.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-white text-decoration-none fw-bold'>MUSCLE FORGE</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit text-white fw-bolder">About</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header