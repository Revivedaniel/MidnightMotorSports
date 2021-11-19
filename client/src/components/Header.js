// header (Black) - with logo, socials, login/sign up
import React from 'react';
import Midnight from '../images/midnightlogo.png'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'

export default function Header() {
return<header>
<img src={Midnight} alt='midnight logo' className='midnightLogo' />
<h1 className='headerPhrase'>"The Real Thang Happens At Night"</h1>
<img src={Instagram} alt='instagram logo' className='instagramLogo' />
<img src={Facebook} alt='facebook logo' className='facebookLogo' />
<h2>login</h2>
</header>
} 