import React from 'react'
import "./Header.css";

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
	<div className='header'>
		{/* Profile btn */}
		<IconButton>
			<PersonIcon fontSize='large' className='header__icon'/>
		</IconButton>

		{/* Logo */}
		<img
			className='header__logo'
			src='https://img.freepik.com/free-vector/puppy-kitten-paw-print-love-heart-background_1017-36755.jpg?w=996&t=st=1676663642~exp=1676664242~hmac=7da9809735d7ba01106497d44aab28d65a18457d0ed5fcb7e74af827c1b21d34'
			alt=''
		/>

		{/* Forum btn */}
		<IconButton>
			<ForumIcon fontSize='large' className='header__icon'/>
		</IconButton>
		
	</div>
  )
}

export default Header