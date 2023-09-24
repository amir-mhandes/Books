import React from 'react';
import Button from '@mui/material/Button';
import AddCardIcon from '@mui/icons-material/AddCard';

const AddButton = props => {
    return (
        <Button
        variant='contained'
        startIcon={<AddCardIcon />}
        {...props}
    >
        ADD
    </Button>
    )
}

export default AddButton;