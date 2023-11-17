import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'

export default function Formbtn() {
    const [actionType, setActionType]= useState('Submit');
    const [students, setStudents]= useState([]);
    const [student, setStudent]= useState(
        {
            id:0,
            firstName:'',
            lastName:''
        }
    );

    const getStudent=(event)=>
    {
        setStudent(
            {
                ...student,
                [event.target.name]:event.target.value
            }
        );
    }

    const handleDelete=(id)=>
    {
      const newstudents=students.filter((item)=>item.id !=id);
      setStudents(newstudents)
    }

    const handleEdit=(item)=>
    {
        setStudent(item);
        setActionType('Update');
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        if(actionType=='Update')
        {
            const newStudents= students.map((item) => item.id== student.id ? student:item)
            //Update
            setStudents(newStudents);
            setStudent(
                {
                    firstName:'',
                    lastName:''
                }
            );
            setActionType('Submit');

            return;
        }
        setStudents([...students,{...student, id:Math.random()}]);
        setStudent(
            {
                firstName:'',
                lastName:''
            }
        )
        console.log('Submited!');
    }
  return (
    <div>
        {/* {student.firstName}
        <br/>
        {student.lastName} */}

        <form onSubmit={handleSubmit} >
            First Name
            <br/>
            <input value={student.firstName} type='text' id='firstName' name='firstName' onChange={getStudent}/>
            <br/>
            Last Name
            <br/>
            <input value={student.lastName} type='text' id='lastName' name='lastName' onChange={getStudent}/>
            <br/>
            <br/>

            <button type='submit'>{actionType}</button>
        </form>
        <div>
            {
                students.map(
                    (item,index)=>
                    (
                        <div key={index}>
                            <h3>FirstName. {item.firstName} </h3> 
                            <h3>LastName. {item.lastName}</h3>
                            <h3><button onClick={()=>handleDelete(item.id)}>Delete</button></h3>
                            <h3><button onClick={()=>handleEdit(item)}>Edit</button></h3>
                        </div>
                    )
                )
            }
        </div>
    </div>

    
  )
}
