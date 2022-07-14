import React from 'react';

// Images
import Logo from '../assets/images/logo.png';

// MUI
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF3359'
    },
    sitelight: {
      main: '#FFFFFF'
    },
  },
});

function Header() {
  return (
    <header className="site_header">
        <div className='site_header_sub'>
            <div className="site_logo">
            <a href="#"><img src={Logo} alt="SK Design" /></a>
            </div>
            <div className="site_nav">
                <div className='site_menu'>
                    <ul className="items">
                        <li className="item"><a href="#" className="link">Services</a></li>
                        <li className="item"><a href="#" className="link">Case Study</a></li>
                        <li className="item"><a href="#" className="link">About Us</a></li>
                        <li className="item"><a href="#" className="link">Contact Us</a></li>
                    </ul>
                </div>
                <div className="site_humburg">
                    <ThemeProvider theme={theme}>
                        <Button variant="outlined" color="sitelight">
                            <span className='button_pointer'></span>
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;