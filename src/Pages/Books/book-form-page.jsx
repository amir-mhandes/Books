import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookForm from '../../Components/Box/form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';


const IconBreadcrumbs = () => {
    
  const navigate= useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate('/')
  }

  return (
    <Box sx = {{m:4}} role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
      <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HOME
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          onClick={handleClick}
        >
          <BookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          BOOKS
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <LibraryBooksIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          ADD
        </Typography>
      </Breadcrumbs>
      <BookForm />
    </Box>
  );
}

export default IconBreadcrumbs;