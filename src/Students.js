import { useEffect ,useState} from 'react';
import { StudentCard } from './StudentCard';


export function Students() {
  
  const[studentInfo,setstudentInfo]=useState([]);
  const stdntinf=[
   {
    "id": "100",
    "Image": "https://media.gettyimages.com/photos/young-teenage-male-student-smiling-during-parent-teacher-conference-picture-id600414846?k=20&m=600414846&s=612x612&w=0&h=agl93L1SNcjysdXvydkG_cVg_8TaAo9DUuuLR8jHRq4=",
    "Name": "Roy",
    "Class": "8th D",
    "Contactno": 9000000000,
    "Rollno": 12
   },
   {
    "id": "101",
    "Image": "https://media.gettyimages.com/photos/portrait-of-japanese-male-elementary-school-student-with-satchel-picture-id1270187787?k=20&m=1270187787&s=612x612&w=0&h=6YgC0wBCE_3I1FYkkyp4gdUSVFrh6YwJugeuwCyObfk=",
    "Name": "Iris",
    "Class": "7th A",
    "Contactno": 9000000005,
    "Rollno": 16
   },
   {
    "id": "102",
    "Image": "https://media.gettyimages.com/photos/boy-wearing-hooded-sweatshirt-smiling-elevated-view-picture-id200160684-001?k=20&m=200160684-001&s=612x612&w=0&h=FGCQQc4G0Ael6PvOPCEsmNMxyjkBIs7PRkI4wPhT9wY=",
    "Name": "Chris",
    "Class": "6th A",
    "Contactno": 9000001223,
    "Rollno": 22
   },
   {
    "id": "103",
    "Image": "https://media.gettyimages.com/photos/confident-schoolboy-at-his-first-day-in-school-picture-id1071765670?k=20&m=1071765670&s=612x612&w=0&h=tzhcmvoasNJCK7KAZ2-UHJolABc6cfRq574rEeBuEKc=",
    "Name": "Jerry",
    "Class": "9th C",
    "Contactno": 9000001222,
    "Rollno": 28
   },
   {
    "id": "104",
    "Image": "https://media.gettyimages.com/photos/school-boy-picture-id902391140?k=20&m=902391140&s=612x612&w=0&h=HoVmvrGpkCF-aC7GuBKk1_lJyDXMuLLXw6l9d61ksuA=",
    "Name": "Steven",
    "Class": "8th B",
    "Contactno": 9000001209,
    "Rollno": 19
   },
   {
    "id": "105",
    "Image": "https://media.gettyimages.com/photos/portrait-of-boy-standing-in-front-of-chalkboard-picture-id56957271?k=20&m=56957271&s=612x612&w=0&h=MpjqWsE-Do7XNh1C9iayYVadhh48LFWm3fqtb_CPoD4=",
    "Name": "Zahir",
    "Class": "8th A",
    "Contactno": 9000001208,
    "Rollno": 15
   },
   {
    "id": "106",
    "Image": "https://media.gettyimages.com/photos/open-your-mind-to-knowledge-picture-id1096013738?k=20&m=1096013738&s=612x612&w=0&h=CoVeB3VaIFPgbpgClcnIanwvvENohzNPm92GlEDTBQU=",
    "Name": "Ratan",
    "Class": "8th A",
    "Contactno": 9000001207,
    "Rollno": 20
   },
   {
    "id": "107",
    "Image": "https://media.gettyimages.com/photos/boy-studying-at-home-stock-photo-picture-id1276692135?k=20&m=1276692135&s=612x612&w=0&h=k38sTbTXxUx6ZI25BG_eUAkEy-c2G6yjvvNsVdnkCR8=",
    "Name": "Nick",
    "Class": "6th C",
    "Contactno": 9000001206,
    "Rollno": 10
   },
   {
    "id": "108",
    "Image": "https://media.gettyimages.com/photos/portrait-of-a-young-school-boy-smiling-picture-id941782124?k=20&m=941782124&s=612x612&w=0&h=pvQv-fGE2KJgLc_A-vxrKvak6yCUvKGwclV_91NafN0=",
    "Name": "Bravo",
    "Class": "8th A",
    "Contactno": 9000001205,
    "Rollno": 7
   },
   {
    "id": "109",
    "Image": "https://media.gettyimages.com/photos/smiling-schoolboy-in-the-schoolyard-picture-id1270072400?k=20&m=1270072400&s=612x612&w=0&h=iwPDIxqHD3FqBg55g5bJp1CpCA8UjxNpckSMB4FIdp8=",
    "Name": "Devin",
    "Class": "7th A",
    "Contactno": 9000001204,
    "Rollno": 18
   },
   {
    "id": "110",
    "Image": "https://media.gettyimages.com/photos/bored-schoolboy-in-classroom-picture-id1148232189?k=20&m=1148232189&s=612x612&w=0&h=PGshiuFJvO8XfGeWkoTvY4lnwFRMFdi7W2P8TWJtl2Y=",
    "Name": "Dueno",
    "Class": "9th C",
    "Contactno": 9000001203,
    "Rollno": 9
   },
   {
    "id": "111",
    "Image": "https://media.gettyimages.com/photos/smiling-teenage-boy-with-school-bag-in-front-of-school-picture-id1175573811?k=20&m=1175573811&s=612x612&w=0&h=kBuhkjKyvewaAqdNkfLH2O8v562Sp9IeHGZ27rO5E_k=",
    "Name": "King D'zouza",
    "Class": "9th C",
    "Contactno": 9000001202,
    "Rollno": 10
   },
   {
    "id": "112",
    "Image": "https://media.gettyimages.com/photos/indian-high-school-students-stock-image-picture-id1071546516?k=20&m=1071546516&s=612x612&w=0&h=0Yo8rFpEnGZ_sFGnHK9GzSXiNMmLibcYmT4bMWIqsuI=",
    "Name": "Vikram",
    "Class": "8th C",
    "Contactno": 9000001201,
    "Rollno": 11
   },
   {
    "id": "113",
    "Image": "https://media.gettyimages.com/photos/portrait-of-a-young-school-boy-smiling-picture-id941782244?k=20&m=941782244&s=612x612&w=0&h=ACipNPwYHUeVFr5SHy0C9fgIwbVvSVYYdMwdq_fdGvg=",
    "Name": "Brahmas",
    "Class": "8th B",
    "Contactno": 9000001200,
    "Rollno": 12
   }
  ]

  function getStudentAPI(){
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Students")
    .then((data)=>data.json())
    .then((mvs)=>setstudentInfo(mvs));
  }

  useEffect(()=>{
    getStudentAPI();
  },[]);

  return (
    <div className="studentList">
      {studentInfo.map((value, index) => {
        return <StudentCard key={value.id} id={value.id} img={value.Image} name={value.Name} Class={value.Class} 
                          Contactno={value.Contactno} Rollno={value.Rollno} 
                          stdntinf={studentInfo} setstudentInfo={setstudentInfo} getStudentAPI = {getStudentAPI} />;
      })}
    </div>
  );
}
