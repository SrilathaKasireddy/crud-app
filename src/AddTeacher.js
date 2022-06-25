import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
 Name : yup.string().required("Teacher name is required"),
 Image: yup.string().required("Please add image "),
 Qualification : yup.string().required("Please add Qualification"),
 
 Contactno : yup.number().required("Please add Contactno")
}
);
export function AddTeacher() {
  
   const navigate=useNavigate();
  
  
  
  function TeacherEditCore({Teacher}){
    
  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      Name: Teacher.Name,
                      Image: Teacher.Image,
                      Qualification: Teacher.Qualification,
                      
                      Contactno: Teacher.Contactno
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddTeacher(Teacher,values)
  })

  const AddTeacher =() => {
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Teachers", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data)=>console.log(data))
  .then(() => navigate("/Teachers"));
  };
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
      
      <Button className="AddTeacher" type="submit">Add Teacher</Button>
    </form>
  );
}
}