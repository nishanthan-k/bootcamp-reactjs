import React from "react";
import "../css/TicketFormFields.css";

const TicketFormFields = ( props ) => {

  // const [state, setState] = useState({
  //   showform: false,
  //   firstname: "",
  //   lastname: " ",
  //   fathersname: "",
  //   gender: "",
  //   place: "",
  //   Nationality: "",
  //   Hobby: "",
  //   proffession: "",
  // });

  
  const handleLocalInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    // setState(e.target.value, value);
    // console.log(state);
    
    props.onInputChange(e.target.name, value);
  };
  
  const submitForm = (e) => {
    e.preventDefault();

    let result = true;
    Object.entries(props.data).map(ele => {
      if (ele[1] === "") {
        console.log(ele)
        console.log(false);
       result =  false;
      }
    })
    // console.log(true);
    console.log(result)
    // return result;

    if (!result) {
      alert('Fill all the details');
    }


    if (result) {
      props.onInputChange('showform', true)
      console.log(props.data.firstname);
    }

    // setState({
    //   ...state,
    //   [state.showform]: true
    // })

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
                  value={props.data.firstname}
                  onChange={handleLocalInputChange}
                  required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter LastName:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="lastname"
                  value={props.data.lastname}
                  onChange={handleLocalInputChange}
                  required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter FathersName:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="fathersname"
                  value={props.data.fathersname}
                  onChange={handleLocalInputChange}
                  required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Gender:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="gender"
                  value={props.data.gender}
                  onChange={handleLocalInputChange}
                  required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Place:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="place"
                  value={props.data.place}
                  onChange={handleLocalInputChange}
                  required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Nationality:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="Nationality"
                  value={props.data.Nationality}
                  onChange={handleLocalInputChange}
                  required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Hobby:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="Hobby"
                  value={props.data.Hobby}
                  onChange={handleLocalInputChange}
                  required
                />
              </div>
              <div className="TicketFormInput">
                <label className="TicketFormLabel">Enter Proffession:</label>
                <input
                  className="TicketFormInputField"
                  type="text"
                  name="proffession"
                  value={props.data.proffession}
                  onChange={handleLocalInputChange}
                  required
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
