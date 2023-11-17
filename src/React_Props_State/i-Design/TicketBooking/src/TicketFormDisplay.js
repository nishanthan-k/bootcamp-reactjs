import { React, useState } from "react";
import "../css/TicketFormDisplay.css";
import TicketFormFields from "./TicketFormFields";

const TicketFormDisplay = (data) => {
  // console.log(onInputChange);
  const formData = Object.entries(data.data);
  // console.log(formData);
  // console.log(formData[1][1]);
  console.log(data.data)

  const [state, setState] = useState({
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

  const handleInputChange = (name, value, e) => {
    e.preventDefault();
    setState({
      ...state,
      [name]: value,
    });

    data.onInputChange(name, value);
  };

  const Edit = (e) => {
    e.preventDefault();
    console.log('Edit');
    if (formData[0][1] === true) {
      console.log('showform true');
      handleInputChange('showform', false, e);
      <TicketFormFields onInputChange={handleInputChange} data={data.data}/>
    }
  };

  const IsAllFilled = () => {
    let result = true;
    Object.entries(data.data).map(ele => {
      if (ele[1] === "") {
        console.log(ele)
        console.log(false);
       result =  false;
      }
    })
    // console.log(true);
    console.log(result)
    return result;
  }

  return (
    <>
      <div className="TicketFormDisplay">
        <div className="TicketFormDisplayContent">
          <h1 className="TicketFormDisplayH1">Booked Successfully!</h1>
          <h2 className="TicketFormDisplayH2">
            Happy journey {formData[1][1]} {formData[2][1]} !
          </h2>

          <button
            className="TicketFormDisplayEditBtn"
            onClick={(e) => {
              // e.preventDefault();
              Edit(e)
            }}
          >
            Edit
          </button>

          {IsAllFilled() && (
            <div className="TicketFormDisplayUserDetails">
            <div className="TicketFormDisplayFormData">
              <p>FirstName</p>
              <p>{formData[1][1]}</p>
            </div>
            <div className="TicketFormDisplayFormData">
              <p>LastName</p>
              <p>{formData[2][1]}</p>
            </div>
            <div className="TicketFormDisplayFormData">
              <p>Fathers Name</p>
              <p>{formData[3][1]}</p>
            </div>
            <div className="TicketFormDisplayFormData">
              <p>Gender</p>
              <p>{formData[4][1]}</p>
            </div>
            <div className="TicketFormDisplayFormData">
              <p>Place</p>
              <p>{formData[5][1]}</p>
            </div>
            <div className="TicketFormDisplayFormData">
              <p>Nationality</p>
              <p>{formData[6][1]}</p>
            </div>
            <div className="TicketFormDisplayFormData">
              <p>Hobby</p>
              <p>{formData[7][1]}</p>
            </div>
            <div className="TicketFormDisplayFormData">
              <p>Profession</p>
              <p>{formData[8][1]}</p>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TicketFormDisplay;
