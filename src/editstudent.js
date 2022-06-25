import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";



const formValidationSchema = yup.object({
  Name : yup.string().required("Student name is required"),
  Image : yup.string().required("Please add image "),
  Rollno : yup.number().required("Please add class with section"),
  Class : yup.string().required("Please add Rollno"),
  Contactno : yup.number().required("Please add Contactno")
}
);



export function EditStudent() {

  const[Student,setStudent]=useState(null);
  const { id } = useParams();
  
  function getStudentAPI(){
    fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Students/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setStudent(mvs));
  }

  useEffect(()=>{
    getStudentAPI();
  },[]);






  return(
    Student ? <StudentEditCore Student={Student}/> : "Loading..."
  )

}



  function StudentEditCore({Student}){


    const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
      initialValues : {
                        Name: Student.Name,
                        Image: Student.Image,
                        Rollno: Student.Rollno,
                        Class: Student.Class,
                        Contactno: Student.Contactno
                      },
      validationSchema : formValidationSchema,
      onSubmit : (values)=>editStudentAPI(Student,values)
    })

    



    const navigate = useNavigate();

    function editStudentAPI(Student,values){
      fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Students/${Student.id}`,
        {
          method:"PUT",
          body : JSON.stringify(values),
          headers : {"Content-Type":"application/json"}
        }
      ).then(()=>navigate("/Students"))
    }
    return (
      <form onSubmit={handleSubmit} 
      className="formSection">
        
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
        
        <Button  type="submit">SAVE</Button>
      </form>
    );
  }
