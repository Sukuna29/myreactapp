
import './Student.css';
export default function Student(props) {
    const value=100;
  return (

    <>
    
<table>
  <tr>
    <td>
    <h2>Ankit Tada</h2>
    </td>

    <td>
      {props.mobilenumber}
    </td>
    </tr>
    </table>
    {value}
    </>
  )
}
