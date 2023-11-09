import React from "react";
import './AlumniMeet.css'

const AluminiMeet = () => {
  const StudentDetails = [{ name: 'Alex', department:'ECE', yearOfPassedOut:'2019', percentage:'80%', location:'Chennai', mobileNumber:9685471235 },

{ name: 'Ajay', department:'CSE', yearOfPassedOut:'2014', percentage:'70%', location:'Bangalore', mobileNumber:8754692315 },

{ name: 'Barathi', department:'IT', yearOfPassedOut:'2013', percentage:'60%', location:'Hyderabad', mobileNumber:8001236547 },

{ name: 'Cindrella', department:'EEE', yearOfPassedOut:'2014', percentage:'80%', location:'Coimbatore', mobileNumber:9865321478 },

{ name: 'Daniel', department:'MCT', yearOfPassedOut:'2019', percentage:'50%', location:'Coimbatore', mobileNumber:9123547863 },

{ name: 'Sara', department:'ECE', yearOfPassedOut:'2018', percentage:'95%', location:'Pune', mobileNumber:8054632179 },

{ name: 'Nickolas', department:'EEE', yearOfPassedOut:'2018', percentage:'85%', location:'Mysore', mobileNumber:9806504732 },

{ name: 'Alen', department:'CSE', yearOfPassedOut:'2017', percentage:'80%', location:'delhi', mobileNumber:9853214067 },

{ name: 'Mitra', department:'IE', yearOfPassedOut:'2017', percentage:'70%', location:'chennai', mobileNumber:9325874106 },

{ name: 'Philip', department:'MCT', yearOfPassedOut:'2015', percentage:'60%', location:'Bangalore', mobileNumber:9487563208 }

];

  return (
    <>
      <div className="AlumniMeet">
        <h1 className="AlumniMeetTitle">Alumni Meet</h1>

        <p className="AlumniMeetText">
          Alumni meet is a gathering of passed out students of an institution
          and it is a place where the institution feels proud on seeing its
          successful alumni. During their meet, the alumni community shares
          their experience in the outside world, which they faced after stepping
          out of the institution. The meet also creates a platform to identify
          the colleges most distinguished alumni.
        </p>

        <h3 className="AlumniMeetTitleH3">First alumni meet is scheduled on 25.02.2020</h3>

        <h2 className="AlumniMeetTitleH2">Students Details Registered for alumni meet</h2>

        <table className="AlumniMeetTable" id="student-table">
          <thead>
            <tr className="AlumniMeetTableItem">
            <th className="AlumniMeetTableItem">Name</th>
            <th className="AlumniMeetTableItem">Department</th>
            <th className="AlumniMeetTableItem">Passed out year</th>
            <th className="AlumniMeetTableItem">Percentage</th>
            <th className="AlumniMeetTableItem">Present Location</th>
            <th className="AlumniMeetTableItem">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {
              StudentDetails.map((e, i) => (
                <tr className="AlumniMeetTableItem" key={`e-id-${i}`} id={`e-id-${i}`}>
                  <td className="AlumniMeetTableItem">{e.name}</td>
                  <td className="AlumniMeetTableItem">{e.department}</td>
                  <td className="AlumniMeetTableItem">{e.yearOfPassedOut}</td>
                  <td className="AlumniMeetTableItem">{e.percentage}</td>
                  <td className="AlumniMeetTableItem">{e.location}</td>
                  <td className="AlumniMeetTableItem">{e.mobileNumber}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AluminiMeet;
