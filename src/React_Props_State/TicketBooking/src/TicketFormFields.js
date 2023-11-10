import React, { useState } from "react";
import "../css/TicketFormFields.css";

const TicketFormFields = ( {onInputChange} ) => {
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

  const handleLocalInputChange = (e) => {
    const value = e.target.value;
    setState(value);
    
    onInputChange(e.target.name, value);
  };
  
  const submitForm = (e) => {
    e.preventDefault();

    setState({
      ...state,
      [state.showform]: true
    })

    onInputChange('showform', true)
  }

  return (
    <>
      <div className="TicketFormContent">
      <div className="TicketFormFields">
            <h1 className="TicketFormH1">USER DETAILS</h1>
            <form className="TicketFormForm" action="GET">
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter FirstName:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="firstname"
                  value={state.firstname}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter LastName:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="lastname"
                  value={state.lastname}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter FathersName:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="fathersname"
                  value={state.fathersname}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Gender:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="gender"
                  value={state.gender}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Place:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="place"
                  value={state.place}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Nationality:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="Nationality"
                  value={state.Nationality}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Hobby:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="Hobby"
                  value={state.Hobby}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Proffession:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="proffession"
                  value={state.proffession}
                  onChange={handleLocalInputChange}
                  // required
                />
              </div>

              <button className="TicketFormBtns" onClick={submitForm}>Save</button>
              <button className="TicketFormBtns" onClick={e => e.preventDefault()}>
                Cancel  
              </button>
            </form>
            </div>
      </div>
    </>
  );
};

export default TicketFormFields;
