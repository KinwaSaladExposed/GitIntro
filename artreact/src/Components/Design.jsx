import React from 'react';
import se3 from "./img/pictures/3rd-section-img.png"

function Design() {
	return (
	<div className="DesignDiv">
    <div className="DD_Foreground">
      <h2>Modern Design</h2>
      <p>Destroying stereotypes, making cool designs and creating MASTERPIECES</p>

     <img src={se3}/>
    </div>
    <div className="DD_Background">
      <p className="ABP">Is Our Nieche</p>
    </div>
  </div>
	);
}

export default Design;