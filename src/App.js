
import './App.css';
import { useState} from "react";
import { Home } from './Home';
import { Students } from './Students';
 import {StudentAdditionForm} from "./StudentAdditionForm"
 import { EditStudent } from './editstudent';
 import { Teachers} from './Teacher';
 import { TeacherAdditionForm } from './TeacherAdditionForm';
import { Routes, Route, Link, navigate, useNavigate } from "react-router-dom";
import { EditTeacher } from './editTeacher';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function App() {
  const [mode,setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  
  const navigate = useNavigate();
  
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{borderRadius:10,margin:10,minHeight:"100vh"}} >
        <div className="App">
          
          <AppBar position="static">
            <Toolbar className="toolBar">
              <div>
                <Button color="inherit" onClick = {()=> navigate("/")}>Home</Button>
                <Button color="inherit" onClick = {()=> navigate("/students")}>Students List</Button>
                <Button color="inherit" onClick = {()=> navigate("/addstudents")}>Add Students</Button>
                <Button color="inherit" onClick = {()=> navigate("/teachers")}>Teachers List</Button>
              <Button color="inherit" onClick={()=>navigate("/addteachers")}>Add Teachers</Button>
              </div>
              <div>
                <Button color="inherit" className="modeButton" onClick = {()=> 
                  setMode(mode==="light" ? "dark" : "light")
                  }>{mode==="light" ? <Brightness4Icon/> : <Brightness7Icon/>}&nbsp;&nbsp;
                    {mode==="light" ? "Dark Mode" : "Light Mode"}
                </Button>
              </div>
            </Toolbar>
          </AppBar>
              
          <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students/>} />
            <Route path="/addstudents"element={<StudentAdditionForm />}/>
            <Route path="/students/edit/:id" element={<EditStudent />} />
            <Route path="/teachers" element={<Teachers/>} />
            <Route path="/addteachers"element={<TeacherAdditionForm />}/>
            <Route path="/teachers/edit/:id" element={<EditTeacher />} />

            
            
            
            <Route path="*" element={<NotFound />} />
            
            
          </Routes>
        </div>
        </Paper>
    </ThemeProvider>
  ) 
}

function NotFound(){
  return <h1>404 not found</h1>
}




export default App;


