import React from 'react';
// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FixedSizeGrid from '../../Components/Box/list';
import Box from '@mui/material/Box';

const handleClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
  const IconBreadcrumbs = () => {
  return (
    <Box sx = {{m:4}} role="presentation" onClick={handleClick}>
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
          href="/material-ui/getting-started/installation/"
        >
          <BookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          BOOKS
        </Link>
        {/* <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <LibraryBooksIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          LIST
        </Typography> */}
      </Breadcrumbs>
      <FixedSizeGrid />
    </Box>
  );
}

export default IconBreadcrumbs;