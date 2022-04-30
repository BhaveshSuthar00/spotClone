

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Premium', 'Support', 'Download' , "|" , "Signup" , "Login" ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
      <>
    <AppBar style={{backgroundColor:"black" , height:"70px"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex',  } }}
          >
           <img id="logo" src="https://th.bing.com/th/id/R.c3122a410826b2fdfe105857c19eb92b?rik=8dKIR3FXOhD3wA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fSpotify-emblem.jpg&ehk=ppL0U%2bmPCgmeRFhk4iS6EacKGLP%2bVNCvXoo8evCPEEg%3d&risl=&pid=ImgRaw&r=0" alt="spotifyLogo" />
          <span id="logoname">Spotify</span>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , marginLeft:"550px" } }}>
            {pages.map((page) => (
              <Button id="btn"
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white',  marginLeft:"5px"  }}
              >
                {page}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>

           <div id="maindiv">
               <div className="leftdiv">
               <p> SPOTIFY PREMIUM</p>
               <h1> Get 3 months of Premium for free</h1>
               <h3>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h3>
               <button id="subscription">GET 3 MONTHS FREE</button>
               <h5>Individual plan only. ₹119/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 12 May 2022.</h5>
               </div>
               <div className="rightdiv"></div>
           </div>
           <div>
               
           </div>
</>
  );
};

