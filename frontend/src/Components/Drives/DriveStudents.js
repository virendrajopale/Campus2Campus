import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudByCategory } from '../../redux/Actions/DriveAction';
import { useTable } from 'react-table';
import Table from './Table';
import SelectColumnFilter from './SelectColumnFilter';


const DriveStudents = (props) => {
  const { id, cat } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentCat } = useSelector((state) => state.drives);

  useEffect(() => {
    dispatch(getStudByCategory({ id, cat }))
  }, [dispatch,id,cat]);

  // Define columns for your table
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        
      },
      {
        Header: "Year",
        accessor: "year",
        Filter:SelectColumnFilter,
        filter:'includes'
      },
      {
        Header: "Register No.",
        accessor: "reg_no",
      },
      {
        Header: "Department",
        accessor: "dept",
        Filter:SelectColumnFilter,
        filter:'includes'
      },

    ],
    []
  );

  const data = studentCat ? studentCat.map(student => ({
    name: student.profile.name, 
    year: student.profile.year,
    reg_no:student.profile.reg_no,
    dept:student.profile.dept
   
  })) : [];
  return (
    
     <>
        <Table columns={columns} data={data}/>
     </>
  );
};

export default DriveStudents;
