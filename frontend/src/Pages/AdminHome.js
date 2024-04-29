import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDrives } from '../redux/Actions/DriveAction';
import { fetchAllStudents } from '../redux/Actions/UserAction';
import {Bar,Pie,Doughnut} from 'react-chartjs-2';
import {Chart as Chartjs,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement} from 'chart.js';

Chartjs.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement);

const AdminHome = () => {
 const dispatch= useDispatch()
const {drives} =useSelector(state=>state.drives);
const { users } = useSelector(state => state.users);
const no_of_drives=drives  && drives.length
const no_of_users=users && users.Students  && users.Students.length
const no_of_placed=users  && users.Students && users.Students.filter((std)=>std.placed===true)
const no_of_unplaced=users  && users.Students && users.Students.filter((std)=>std.placed===false)
//
const no_of_drive_IT=drives && drives.map((drive)=>drive.EligibleDepartMents.filter((drv)=>drv==('Information Technology')))
const no_of_drive_Entc=drives && drives.map((drive)=>drive.EligibleDepartMents.filter((drv)=>drv==('Electronics and Telecommunication')))
const no_of_drive_Mech=drives && drives.map((drive)=>drive.EligibleDepartMents.filter((drv)=>drv==('Mechanical Engineering')))
const no_of_drive_Ele=drives && drives.map((drive)=>drive.EligibleDepartMents.filter((drv)=>drv==('Electrical Engineering')))
const no_of_drive_Civil=drives && drives.map((drive)=>drive.EligibleDepartMents.filter((drv)=>drv==('Civil Engineering')))

const no_of_users_IT=users && users.Students && users.Students.filter((use)=>use.dept=='Information Technology')
const no_of_users_Mech=users && users.Students && users.Students.filter((use)=>use.dept=='Mechanical Engineering')
const no_of_users_Entc=users && users.Students && users.Students.filter((use)=>use.dept=='Electronics and Telecommunication')
const no_of_users_Ele=users && users.Students && users.Students.filter((use)=>use.dept=='Electrical Engineering')
const no_of_users_Civil=users && users.Students && users.Students.filter((use)=>use.dept=='Civil Engineering')

//dept
const no_of_placed_dept_IT=no_of_placed && no_of_placed.filter((std)=>std.dept=='Information Technology')
const no_of_unplaced_dept_IT=no_of_unplaced && no_of_unplaced.filter((std)=>std.dept=='Information Technology')
const no_of_placed_dept_EnTC=no_of_placed && no_of_placed.filter((std)=>std.dept=='Electronics and Telecommunication')
const no_of_unplaced_dept_EnTC=no_of_unplaced && no_of_unplaced.filter((std)=>std.dept=='Electronics and Telecommunication')
const no_of_placed_dept_mech=no_of_placed && no_of_placed.filter((std)=>std.dept=='Mechanical Engineering')
const no_of_unplaced_dept_mech=no_of_unplaced && no_of_unplaced.filter((std)=>std.dept=='Mechanical Engineering')
const no_of_placed_dept_ele=no_of_placed && no_of_placed.filter((std)=>std.dept=='Electrical Engineering')
const no_of_unplaced_dept_ele=no_of_unplaced && no_of_unplaced.filter((std)=>std.dept=='Electrical Engineering')
const no_of_placed_dept_civil=no_of_placed && no_of_placed.filter((std)=>std.dept=='Civil Engineering')
const no_of_unplaced_dept_civil=no_of_unplaced && no_of_unplaced.filter((std)=>std.dept=='Civil Engineering')
//year




useEffect(()=>{
 dispatch(getAllDrives());
 dispatch(fetchAllStudents())
},[])
// console.log(no_of_placed && no_of_placed.length);
const barData={
   labels : ['IT', 'EnTC', 'Mech', 'Ele', 'Civil'],
   datasets:[
    {
      label:"Placed",
      data:[no_of_placed_dept_IT && no_of_placed_dept_IT.length,
        no_of_placed_dept_EnTC &&  no_of_placed_dept_EnTC.length,
        no_of_placed_dept_mech && no_of_placed_dept_mech.length,
        no_of_placed_dept_ele && no_of_placed_dept_ele.length,
        no_of_placed_dept_civil && no_of_placed_dept_civil.length
      ],
      fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label:"UnPlaced",
      data:[
        no_of_unplaced_dept_IT &&  no_of_unplaced_dept_IT.length,
        no_of_unplaced_dept_EnTC && no_of_unplaced_dept_EnTC.length,
        no_of_unplaced_dept_mech && no_of_unplaced_dept_mech.length,
        no_of_unplaced_dept_ele && no_of_unplaced_dept_ele.length,
        no_of_unplaced_dept_civil && no_of_unplaced_dept_civil.length
      ],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
    }
   ]
}
const piedataAll={
  labels:[' Drives','Candidates','Placed','Unplaced'],
  datasets:[{
    label:'Total',
    data:[
      no_of_drives,
      no_of_users,
      no_of_placed && no_of_placed.length,
      no_of_unplaced && no_of_unplaced.length,
      
    ],
    backgroundColor:[
      'gray',
      'pink',
      'blue',
      'yellow'
    ]
    ,
    hoverOffset:4
  }
]
}
const MechData={
  labels:['Drives','Candidates','Placed','Unplaced'],
  datasets:[{
    label:'Total',
    data:[
      no_of_drive_Mech && no_of_drive_Mech.length,
      no_of_users_Mech && no_of_users_Mech.length,
      no_of_placed_dept_mech && no_of_placed_dept_mech.length,
      no_of_unplaced_dept_mech && no_of_unplaced_dept_mech.length,
      
    ],
    backgroundColor:[
      'gray',
      'pink',
      'blue',
      'yellow'
    ]
    ,
    hoverOffset:4
  }
]
}
const ITData={
  labels:['Drives','Candidates','Placed','Unplaced'],
  datasets:[{
    label:'Total',
    data:[
      no_of_drive_IT && no_of_drive_IT.length,
      no_of_users_IT && no_of_users_IT.length,
      no_of_placed_dept_IT && no_of_placed_dept_IT.length,
      no_of_unplaced_dept_IT && no_of_unplaced_dept_IT.length,
      
    ],
    backgroundColor:[
      'gray',
      'pink',
      'blue',
      'yellow'
    ]
    ,
    hoverOffset:4
  }
]
}
const EnTCData={
  labels:['Drives','Candidates','Placed','Unplaced'],
  datasets:[{
    label:'Total',
    data:[
      no_of_drive_Entc && no_of_drive_Entc.length,
      no_of_users_Entc && no_of_users_Entc.length,
      no_of_placed_dept_EnTC && no_of_placed_dept_EnTC.length,
      no_of_unplaced_dept_EnTC && no_of_unplaced_dept_EnTC.length,
      
    ],
    backgroundColor:[
      'gray',
      'pink',
      'blue',
      'yellow'
    ]
    ,
    hoverOffset:4
  }
]
}
const EleData={
  labels:['Drives','Candidates','Placed','Unplaced'],
  datasets:[{
    label:'Total',
    data:[
      no_of_drive_Ele && no_of_drive_Ele.length,
      no_of_users_Ele && no_of_users_Ele.length,
      no_of_placed_dept_ele && no_of_placed_dept_ele.length,
      no_of_unplaced_dept_ele && no_of_unplaced_dept_ele.length,
      
    ],
    backgroundColor:[
      'gray',
      'pink',
      'blue',
      'yellow'
    ]
    ,
    hoverOffset:4
  }
]
}
const CivilData={
  labels:['Drives','Candidates','Placed','Unplaced'],
  datasets:[{
    label:'Total',
    data:[
      no_of_drive_Civil && no_of_drive_Civil.length,
      no_of_users_Civil && no_of_users_Civil.length,
      no_of_placed_dept_civil && no_of_placed_dept_civil.length,
      no_of_unplaced_dept_civil && no_of_unplaced_dept_civil.length,
      
    ],
    backgroundColor:[
      'gray',
      'pink',
      'blue',
      'yellow'
    ]
    ,
    hoverOffset:4
  }
]
}
  return (
    <>
    <div className=' text-white flex flex-col gap-3 mt-5'>

  <div className='flex gap-5 justify-evenly'>
    <div className=' flex bg-white/20 backdrop-blur p-5 rounded-md flex-col justify-center text-center hover:scale-105 duration-300 cursor-pointer'>
    Total Dives:
    <p>

     {no_of_drives}
    </p>
    </div>
    <div className=' flex bg-white/20 backdrop-blur p-5 rounded-md flex-col justify-center text-center hover:scale-105 duration-300 cursor-pointer'>
    Total Placed: 
    <p>{ no_of_placed && no_of_placed.length}</p>
    </div>
    <div className=' flex bg-white/20 backdrop-blur p-5 rounded-md flex-col justify-center text-center hover:scale-105 duration-300 cursor-pointer'>Total UnPlaced: 
    <p>

   { no_of_unplaced && no_of_unplaced.length}
   </p></div>
    <div className=' flex bg-white/20 backdrop-blur p-5 rounded-md flex-col justify-center text-center hover:scale-105 duration-300 cursor-pointer'>Total Candidates:
   <p>

   {no_of_users}  </p> 
     </div>
  </div>
  <div className=' bg-black/30 backdrop-blur-md mr-2'>

<Bar  data={barData}/>
  </div>
  <div className=' flex md:flex-row flex-col flex-wrap text-white gap-5 justify-evenly bg-black/30 backdrop-blur-md mr-2 mb-2 p-2'>
<div className='md:w-1/4'>

<Doughnut   data={piedataAll}/>
<p className=' text-center m-2'>Campus </p>
</div>

{/*  */}
<div className='md:w-1/4   '>

<Pie data={MechData}/>
<p className=' text-center m-2'>Mechanical </p>
</div>
<div className='md:w-1/4  '>

<Pie data={ITData}/>
<p className=' text-center m-2'>Information Technology </p>
</div>

<div className='md:w-1/4  '>

<Pie data={EnTCData}/>
<p className=' text-center m-2'>Electronics and Telecommunicatio </p>
</div>
<div className='md:w-1/4  '>

<Pie data={EleData}/>
Electrical
</div>
<div className='md:w-1/4  '>

<Pie data={CivilData}/>
Civil
</div>
  </div>
    </div>
    </>
  )
}

export default AdminHome