import React from 'react';
import { Link } from "react-router-dom";

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
            <Link to="/"><img src={Logo} alt="SK Design" /></Link>
            </div>
            <div className="site_nav">
                <div className='site_menu'>
                    <ul className="items">
                        <li className="item"><Link to="/Services" className="link">Services</Link></li>
                        <li className="item"><Link to="/CaseStudy" className="link">Case Study</Link></li>
                        <li className="item"><Link to="/AboutUs" className="link">About Us</Link></li>
                        <li className="item"><Link to="/ContactUs" className="link">Contact Us</Link></li>
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