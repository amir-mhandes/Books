import React from "react";
import '@fontsource/roboto/300.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '../buttons/add';
import AddCircleOutlineIcon1 from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from "react-redux";
import { addBookSlice } from "../../Redux/slices/booksSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

const initialValues = {
  author : '',
  title : ''
}
const formik= useFormik({
  initialValues: initialValues,
  validationSchema: Yup.object().shape({
      author : Yup.string()
      .required('this field is required')
      .min(4, 'please enter more than 4')
      .max(25, 'please enter less than 25'),
      title : Yup.string()
      .required('this field is required')
      .min(4, 'please enter more than 4')
      .max(50, 'please enter less than 50')
  }),
  onSubmit : (values) =>{
    dispatch(addBookSlice({
        title: values.title,
        author: values.author
    }))
    formik.setFieldValue('title', '');
    formik.setFieldValue('author', '');

    navigate('/')
  }
})
return(
<>
<Card 
    sx={{pt:2, mx:5 , mt:5}}
  >
    <CardHeader 
        title= {<h2>New book.</h2>}
        avatar= {<AddCircleOutlineIcon1 />}
    />
    <CardContent>
        <Grid container columnSpacing={2} rowSpacing={3}>
            <Grid item xs={12} md={6}>
                <TextField 
                    variant="outlined"
                    label= "Title"
                    fullWidth
                    required
                    autoFocus
                    name="title"
                    id="title"
                    error= {Boolean(formik.errors.author ) && formik.touched.author}
                    helperText= {formik.errors.author}
                    {...formik.getFieldProps('author')}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField 
                    variant="outlined"
                    label= "author name"
                    fullWidth
                    required
                    name="description"
                    id="description"
                    error= {Boolean(formik.errors.title ) && formik.touched.title}
                    helperText= {formik.errors.title}
                    {...formik.getFieldProps('title')}
                />
            </Grid>
        </Grid>
    </CardContent>
    <CardActions>
        <AddCircleOutlineIcon 
            sx={{mt:5}}
            onClick = {formik.submitForm}
        />
    </CardActions>
</Card>
</>
)
}
export default BookForm;