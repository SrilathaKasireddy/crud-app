import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Teachers } from "./Teacher";






export function TeacherCard({ img, name, Qualification,Contactno, id, getTeacherAPI }) {
  
  
  const navigate = useNavigate();
  return (
    <div  >
    <Card 
    style={{borderRadius:10,width:450,textAlign:"center",margin:10,padding:10}} >
      
        <img  style={{objectFit: "cover"}} 
        className="Image" src={img} alt={name} />
        <CardContent>
          <div className="teacherCredentials">
            <h1 className="Teachers">{`${name}`}
            
            
              
            
            </h1>
            <h3  className="Qualification">Qualification :-{Qualification} </h3>
          </div>
          <h3  className="Contactno">Contactno :-{Contactno}</h3>
          
        </CardContent>
        
         
          <div>
          <IconButton 
            
            
            className = "editIcon"
            color = "primary" onClick = {()=> {
              navigate(`/Teachers/edit/${id}`)
          }}>
            <EditIcon  />
          </IconButton>
          <IconButton 
            
            
            className = "deleteIcon"
            color = "primary" onClick = {()=> {
              fetch(`https://618fb4edf6bf450017484a11.mockapi.io/Teachers/${id}`,{method:"DELETE"})
              .then(()=>getTeacherAPI());
          }}>
            <DeleteIcon  />
          </IconButton>
      
      </div>
    </Card>
    </div>
   
  
  );

}
