import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Students } from "./Students";






export function StudentCard({ img, name, Rollno,Contactno,Class, id, getStudentAPI }) {
  
  
  const navigate = useNavigate();
  return (
    <div  >
    <Card 
    style={{borderRadius:10,width:450,textAlign:"center",margin:10,padding:10}} >
      
        <img  style={{objectFit: "cover"}} 
        className="Image" src={img} alt={name} />
        <CardContent>
          <div className="studentCredentials">
            <h1 className="Students">{`${name}`}
            
            
              
            
            </h1>
            <h3  className="Rollno"> Rollno :-{Rollno} </h3>
          </div>
          <h3  className="Contactno">Contactno :-{Contactno}</h3>
          <h3 className="Class">Class :-{Class}</h3>
        </CardContent>
        
         
          <div>
          <IconButton 
            
            
            className = "editIcon"
            color = "primary" onClick = {()=> {
              navigate(`/Students/edit/${id}`)
          }}>
            <EditIcon  />
          </IconButton>
          <IconButton 
            
            
            className = "deleteIcon"
            color = "primary" onClick = {()=> {
              fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Students/${id}`,{method:"DELETE"})
              .then(()=>getStudentAPI());
          }}>
            <DeleteIcon  />
          </IconButton>
      
      </div>
    </Card>
    </div>
   
  
  );

}
