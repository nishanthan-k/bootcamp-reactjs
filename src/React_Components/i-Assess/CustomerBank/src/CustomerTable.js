import React from 'react'
import "../css/CustomerTable.css"
import ProfileImg from "../assets/img/profile.png"

const CustomerTable = () => {
  const customerDetail = [
    { id: 1, address: "1st cross,Gandhipuram", email: "david@gmail.com", mobile_number: "9897656787", name: "David", password: "david", username: "David", role_id: 1 },
    { id: 2, address: "1st street,Peelamedu", email: "clay@gmail.com", mobile_number: "9897656734", name: "Clay", password: "clay", username: "Clay", role_id: 1 },
    { id: 3, address: "2nd cross,Gandhipuram", email: "peter@gmail.com", mobile_number: "9889656787", name: "Peter", password: "peter", username: "Peter", role_id: 2 },
    { id: 4, address: "Race Course", email: "jecy@gmail.com", mobile_number: "9897656711", name: "Jacy", password: "jacy", username: "Jacy", role_id: 3 },
    { id: 5, address: "Ganapaty", email: "lena@gmail.com", mobile_number: "9891116787", name: "Lena", password: "lena", username: "Lena", role_id: 3 },
    { id: 6, address: "Rs Puram", email: "sophie@gmail.com", mobile_number: "9897656722", name: "Sophie", password: "sophie", username: "Sophie", role_id: 3 },
    {
      id: 7, address: "3rd cross,Kovaipudur", email: "liam@gmail.com", mobile_number: "9822656799", name: "Liam", password: "liam", username: "Liam", role_id: 3

    }
  ]
  return (
    <>
      <div className='CustomerTable'>
        
        <div className='CustomerTableDetail'>
        <p className='CustomerTableHeading'>Customer Detail</p>
        <img className='CustomerTableProfileImg' src={ProfileImg} alt='ProfileImage' height={'50'} width={'50'}/>
        </div>

          <table className='CustomerTableTable'>
            <tr className='CustomerTableRow' key={'tableHeading'}> 
              <td>S.No</td>
              <td>Address</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Name</td>
              <td>Password</td>
              <td>Username</td>
              <td>RoleId</td>
            </tr>

            {customerDetail.map((e, i) => (
              <tr className='CustomerTableRow' id={`rowId${i}`}>
                <td>{e.id}</td>
                <td>{e.address}</td>
                <td>{e.email}</td>
                <td>{e.mobile_number}</td>
                <td>{e.name}</td>
                <td>{e.password}</td>
                <td>{e.username}</td>
                <td>{e.role_id}</td>
              </tr>
            ))}
          </table>
      </div>
    </>
  )
}

export default CustomerTable