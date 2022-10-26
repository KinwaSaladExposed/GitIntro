import React from 'react';

function Form() {
	return (
	<div className="FormDiv">
    <div className="FD_Left">
      
    </div>
    <div className="FD_Mid">
      <h2 className="FDM_MT">Contact Us</h2>

      <form className="FDM_Form" action="#">
        <label className="FDMF_Label" for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Ivan Ivanov" value="name" className="FDMF_Input"/>

        <label className="FDMF_Label" for="post">Email</label>
        <input type="text" name="post" id="post" placeholder="example@gmail.com" value="post" className="FDMF_Input"/>

        <label className="FDMF_Label" for="CorI">Company</label>
        <select name="CorI" id="CorI" className="FDMF_Select">
          <option value="comp">Yes, im a company</option>
          <option value="indi">No, im an individual</option>
        </select>

        <label className="FDMF_Label" for="Data">Agreement for processing the data</label>
        <input type="checkbox" name="Data" id="Data" value="Data" className="FDMF_Input2"/>

        <button value="Fin">Finish</button>
      </form>
    </div>
    <div className="FD_Right">
      
    </div>
  </div>
	);
}

export default Form;