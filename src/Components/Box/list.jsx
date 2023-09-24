import React from 'react';
import AddCircleOutlineIcon from '../buttons/add';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const FixedSizeGrid = () => {
  const navigate= useNavigate();
  const books = useSelector(state => state.books);
  return (
    <>
    <DataGrid
      sx={{pt:2, mx:5 , mt:5}}
      getRowId={(row) => row.title} 
      columns={[
        { field: 'author',headerName:'AUTHOR' }, 
        { field: 'title',headerName:'TITLE' }
      ]}
      rows={books.data}
    />
    <AddCircleOutlineIcon 
    sx={{ ml:5 , mt:5}}
    onClick = {()=>{
      navigate('/add')
    }}
    />
</>
  );
}
export default FixedSizeGrid;
