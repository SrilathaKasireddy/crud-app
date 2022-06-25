import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";



const formValidationSchema = yup.object({
  Name : yup.string().required("Teacher name is required"),
  Image : yup.string().required("Please add image "),
  
  Qualification : yup.string().required("Please add Rollno"),
  Contactno : yup.number().required("Please add Contactno")
}
);



export function EditTeacher() {

  const[Teacher,setTeacher]=useState(null);
  const { id } = useParams();
  
  function getTeacherAPI(){
    fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Teachers/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setTeacher(mvs));
  }

  useEffect(()=>{
    getTeacherAPI();
  },[]);






  return(
    Teacher ? <TeacherEditCore Teacher={Teacher}/> : "Loading..."
  )

}



  function TeacherEditCore({Teacher}){


    const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
      initialValues : {
                        Name: Teacher.Name,
                        Image: Teacher.Image,
                        
                        Qualification: Teacher.Qualification,
                        Contactno: Teacher.Contactno
                      },
      validationSchema : formValidationSchema,
      onSubmit : (values)=>editTeacherAPI(Teacher,values)
    })

    



    const navigate = useNavigate();

    function editTeacherAPI(Teacher,values){
      fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Teachers/${Teacher.id}`,
        {
          method:"PUT",
          body : JSON.stringify(values),
          headers : {"Content-Type":"application/json"}
        }
      ).then(()=>navigate("/Teachers"))
    }
    return (
      <form onSubmit={handleSubmit} 
      QualificationName="formSection">
        
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
         
         name="Qualification"
          value={values.Qualification} 
          onChange={handleChange} 
          onBlur = {handleBlur}  
          id="filled-error-helper-text"
           helperText={touched.Qualification && errors.Qualification} />
        
        <TextField  
        error={touched.Contactno && errors.Contactno}
        label="Contactno" 
        variant="outlined"
         QualificationName="contactno"
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
