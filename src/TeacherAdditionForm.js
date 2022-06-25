import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
  Name : yup.string().required("Please add name"),
  Image: yup.string().required("Please add img "),
  
  Qualification: yup.string().required("Please add Qualification"),
  Contactno : yup.number().required("Please add Contactno")
}
);


export function TeacherAdditionForm() {

  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      Name: "",
                      Image: "",
                      Qualification: "",
                      
                      Contactno: ""
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddTeacherAPI(values)
  })

  
  const navigate = useNavigate();
  

  function AddTeacherAPI(newTeacher){
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Teachers",
      {method:"POST",
      body : JSON.stringify(newTeacher),
      headers : {"Content-Type":"application/json"}
      }
    ).then(()=>navigate("/Teachers"))
      
  }

  


  return (
    <form  style={{padding:10,gap:10,margin:10}} onSubmit={handleSubmit} >
      
      <TextField 
       style={{padding:10}}
        error={touched.Name && errors.Name}
        variant="outlined"
        label="Name" 
         
         name="Name" 
         value={values.Name} 
         onChange={handleChange} 
         onBlur = {handleBlur}  
         id="filled-error-helper-text"
         helperText={touched.Name && errors.Name}/>
       
        <TextField 
         style={{padding:10}} 
        error={touched.Image && errors.Image}
         label="Picture" 
         variant="outlined" 
         name="Image" 
         value={values.Image} 
        onChange={handleChange} 
        onBlur = {handleBlur}  
        id="filled-error-helper-text" 
        helperText={touched.Image && errors.Image}/>
        
        <TextField 
         style={{padding:10}}
        error={touched.Qualification && errors.Qualification}
        label="Qualification" 
        
        variant="outlined"
        
         className="Qualification" 
          name="Qualification" 
          value={values.Qualification} 
          onChange={handleChange}
           onBlur = {handleBlur}  
           id="filled-error-helper-text" helperText={touched.Qualification && errors.Qualification}/>
       
        
        
        <TextField  
         style={{padding:5}}
        error={touched.Contactno && errors.Contactno}
        label="Contactno" 
        variant="outlined"
         className="contactno"
          name="Contactno" 
          value={values.Contactno}
           onChange={handleChange} 
           onBlur = {handleBlur}  
           id="filled-error-helper-text"
            helperText={touched.Contactno && errors.Contactno}/>
      
      <Button variant="outlined" classname="addTeacherButton" type="submit">Add Teacher</Button>
    </form>
  );
}
