import React, {useState} from 'react'
import TicketFormFields from "./TicketFormFields"
import TicketFormDisplay from './TicketFormDisplay';

const TicketBooking = () => {
  const [formData, setFormData] = useState({
    showform: false,
    firstname: "",
    lastname: " ",
    fathersname: "",
    gender: "",
    place: "",
    Nationality: "",
    Hobby: "",
    proffession: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // console.log(formData);

  return (
    <>
      <div className='TicketFormDisplay'>
        {formData.showform ? (
          <TicketFormDisplay onInputChange={handleInputChange} userName={formData.firstname}/>
          ) : (
          <TicketFormFields onInputChange={handleInputChange}/>
        )
        }
      </div>
    </>
  )
}

export default TicketBooking;