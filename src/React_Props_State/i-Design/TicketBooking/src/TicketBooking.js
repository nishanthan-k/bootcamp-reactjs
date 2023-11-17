import React, {useState} from 'react'
import TicketFormFields from "./TicketFormFields"
import TicketFormDisplay from './TicketFormDisplay';

const TicketBooking = () => {
  // console.log('TicketBooking');
  // console.log(props);
  const [formData, setFormData] = useState({
    showform: false,
    firstname: "",
    lastname: "",
    fathersname: "",
    gender: "",
    place: "",
    Nationality: "",
    Hobby: "",
    proffession: "",
  });

  const handleInputChange = (name, value) => {
    if (name === 'showform') {
      console.log(formData.showform, "checking.....................   ");
      setFormData({
        ...formData,
        'showform': !formData.showform,
      });
      check();
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

    }
  };

  const check = () => {
    if (formData.showform) {
      console.log('TB D');

    } else {
      console.log('TB F');
    }
  }
  // console.log(formData.showform, formData.firstname);

  return (
    <>
      <div className='TicketFormDisplay'>
        {formData.showform ? (
          <TicketFormDisplay data={formData} onInputChange={handleInputChange}/>
          ) : (
          <TicketFormFields onInputChange={handleInputChange} data={formData}/>
        )
        }
      </div>
    </>
  )
}

export default TicketBooking;