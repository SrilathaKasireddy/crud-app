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
  Class : yup.string().required("Please add class with section"),
  Rollno: yup.number().required("Please add Rollno"),
  Contactno : yup.number().required("Please add Contactno")
}
);


export function StudentAdditionForm() {

  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      Name: "",
                      Image: "",
                      Rollno: "",
                      Class: "",
                      Contactno: ""
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddStudentAPI(values)
  })

  
  const navigate = useNavigate();
  

  function AddStudentAPI(newStudent){
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Students",
      {method:"POST",
      body : JSON.stringify(newStudent),
      headers : {"Content-Type":"application/json"}
      }
    ).then(()=>navigate("/Students"))
      
  }

  


  return (
    <form onSubmit={handleSubmit} >
      
      <TextField 
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
        error={touched.Rollno && errors.Rollno}
        label="Rollno" 
        
        variant="outlined"
        
         className="rollno" 
          name="Rollno" 
          value={values.Rollno} 
          onChange={handleChange}
           onBlur = {handleBlur}  
           id="filled-error-helper-text" helperText={touched.Rollno && errors.Rollno}/>
       
        <TextField 
        error={touched.Class && errors.Class}
         label="Class" 
         variant="outlined" 
         
         name="Class"
          value={values.Class} 
          onChange={handleChange} 
          onBlur = {handleBlur}  
          id="filled-error-helper-text"
           helperText={touched.Class && errors.Class} />
        
        <TextField  
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
      
      <Button variant="outlined" classname="addStudentButton" type="submit">Add Student</Button>
    </form>
  );
}
