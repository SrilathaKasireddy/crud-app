import { useEffect ,useState} from 'react';
import { TeacherCard } from './TeacherCard';


export function Teachers() {
  
  const[teacherInfo,setteacherInfo]=useState([]);
  const teachrinf=[
    
      {
       "id": "100",
       "Image": "https://media.gettyimages.com/photos/mixed-race-teacher-in-the-classroom-picture-id1043554794?k=20&m=1043554794&s=612x612&w=0&h=DotggpVvznylrQDocIjKmQbbtAOiLSHNSNhyvzRnc4Q=",
       "Name": "Roya",
       "Qualification":"M.tech",
       "Contactno": 9000000000
       
      },
      {
       "id": "101",
       "Image": "https://media.gettyimages.com/photos/africanamerican-elementary-school-teacher-in-library-picture-id1138226573?k=20&m=1138226573&s=612x612&w=0&h=Ue74JxaDZqzI-BUPhlUrj7a9xCwH5Y6HPdO7Qfqa9vQ=",
       "Name": "Irish",
       "Qualification":"M.tech",
       "Contactno":9000000005
       
      },
      {
       "id": "102",
       "Image": "https://media.gettyimages.com/photos/african-american-professor-prepares-for-class-picture-id1146044327?k=20&m=1146044327&s=612x612&w=0&h=6atKP3wdDHlBsIkBB4lXSqXbHnHq0en_Ejebn7Ytbkc=",
       "Name": "Christy",
       "Qualification":"M.tech",
       "Contactno": 9000001223
       
      },
      {
       "id": "103",
       "Image": "https://media.gettyimages.com/photos/portrait-of-female-teacher-standing-in-classroom-with-students-in-picture-id1049271026?k=20&m=1049271026&s=612x612&w=0&h=a604YDYMRGIzlcuOkGmydaqLC2p3gGNtSqTmTXFWWoE=",
       "Name": "Jenny",
       "Qualification":"M.tech",
       "Contactno": 9000001222
       
      },
      {
       "id": "104",
       "Image": "https://media.gettyimages.com/photos/strong-hispanic-woman-teacher-picture-id949435100?k=20&m=949435100&s=612x612&w=0&h=PVJan30B9LPLO1oij8Ep67Lxco3Oc8A5_fWUujcOj3U=",
       "Name": "Stephy",
       "Qualification":"M.tech",
       "Contactno": 9000001209
       
      },
      {
       "id": "105",
       "Image": "https://media.gettyimages.com/photos/portrait-of-boy-standing-in-front-of-chalkboard-picture-id56957271?k=20&m=56957271&s=612x612&w=0&h=MpjqWsE-Do7XNh1C9iayYVadhh48LFWm3fqtb_CPoD4=",
       "Name": "Zaheen",
       "Qualification":"M.tech",
       "Contactno": 9000001208
       
      },
      {
       "id": "106",
       "Image": "https://media.gettyimages.com/photos/teacher-in-classroom-holding-tablet-picture-id493189893?k=20&m=493189893&s=612x612&w=0&h=qTf2ex31yPy0LgdI5wgTeU80M49-iAftBsPMOtznj-k=",
       "Name": "Reena",
       "Qualification":"M.tech",
       "Contactno": 9000001207
       
      },
      {
       "id": "107",
       "Image": "https://media.gettyimages.com/photos/design-professional-enjoys-conducting-new-employee-training-picture-id1132124550?k=20&m=1132124550&s=612x612&w=0&h=V3IT1Etn_mJpU4V6IIdf7E937jVs3bLDgMSSB0stz3o=",
       "Name": "Nicky",
       "Qualification":"M.tech",
       "Contactno": 9000001206
       
      },
      {
       "id": "108",
       "Image": "https://media.gettyimages.com/photos/portrait-of-a-young-school-boy-smiling-picture-id941782124?k=20&m=941782124&s=612x612&w=0&h=pvQv-fGE2KJgLc_A-vxrKvak6yCUvKGwclV_91NafN0=",
       "Name": "Britney",
       "Qualification":"M.tech",
       "Contactno": 9000001205
       
      },
      {
       "id": "109",
       "Image": "https://media.gettyimages.com/photos/elementary-school-teacher-picture-id1212709372?k=20&m=1212709372&s=612x612&w=0&h=icM4JfXAjLjSiuX-3J4fLCpY6qWzo64H7ki-W58F4GY=",
       "Name": "Eva",
       "Qualification":"PHD",
       "Contactno":9000001204
       
      },
      {
       "id": "110",
       "Image": "https://media.gettyimages.com/photos/portrait-of-a-happy-latin-american-teacher-at-the-school-picture-id687830554?k=20&m=687830554&s=612x612&w=0&h=mwUu8oSPaIbhg6bnr0DCRJBQuNzfLQ33zpMsMkOus20=",
       "Name": "Denny",
       "Qualification":"M.tech",
       "Contactno": 9000001203
       
      },
      {
       "id": "111",
       "Image": "https://media.gettyimages.com/photos/engage-minds-picture-id522138534?k=20&m=522138534&s=612x612&w=0&h=WNUP7jARvJmhGsr5JLj8Vs0dgggvXOHZQ72AX9CuZVQ=",
       "Name": "Klara D'zouza",
       "Qualification":"M.tech",
       "Contactno": 9000001202
       
      },
      {
       "id": "112",
       "Image": "https://media.gettyimages.com/photos/lets-learn-something-new-today-picture-id1160693995?k=20&m=1160693995&s=612x612&w=0&h=G0aXWAja7D3mqE5NECpwU_cxg-GF_-RAEpZCXMiVHA8=",
       "Name": "Veronica",
       "Qualification":"M.tech",
       "Contactno": 9000001201
       
      },
      {
       "id": "113",
       "Image": "https://media.gettyimages.com/photos/high-school-teacher-at-school-during-covid19-picture-id1264747460?k=20&m=1264747460&s=612x612&w=0&h=TlhEbEl7IX8oq1Du11ZB7lxWCph3KMMtzbwuCi0XCYs=",
       "Name": "Brais",
       "Qualification":"M.tech",
       "Contactno": 9000001200
       
      }
     ]
   
  function getTeacherAPI(){
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Teachers")
    .then((data)=>data.json())
    .then((mvs)=>setteacherInfo(mvs));
  }

  useEffect(()=>{
    getTeacherAPI();
  },[]);

  return (
    <div className="studentList">
      {teacherInfo.map((value, index) => {
        return <TeacherCard key={value.id} id={value.id} img={value.Image} name={value.Name} Class={value.Class} 
                          Contactno={value.Contactno} Qualification={value.Qualification} 
                          steachrinf={teacherInfo} setteacherInfo={setteacherInfo} getTeacherAPI = {getTeacherAPI} />;
      })}
    </div>
  );
}
