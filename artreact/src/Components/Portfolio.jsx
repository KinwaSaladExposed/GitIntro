import React from 'react';
import g1 from "./img/pictures/gallery1.png";
import g2 from "./img/pictures/gallery2.png";
import g3 from "./img/pictures/gallery3.png";
import g4 from "./img/pictures/gallery4.png";
import g5 from "./img/pictures/gallery5.png";
import g6 from "./img/pictures/gallery6.png";
import g7 from "./img/pictures/gallery7.png";

function Portfolio() {
	return (
	<div className="Portfolio">
    <h2 className="Port_Text">Our Portfolio</h2>

    <div className="Port_Pictures">
      <img src={g1} className="PoPi_Image PPI_1"/>
      <img src={g2} className="PoPi_Image PPI_2"/>
      <img src={g3} className="PoPi_Image PPI_3"/>
      <img src={g4} className="PoPi_Image PPI_4"/>
      <img src={g5} className="PoPi_Image PPI_5"/>
      <img src={g6} className="PoPi_Image PPI_6"/>
      <img src={g7} className="PoPi_Image PPI_7"/>
    </div>
  </div>
	);
}

export default Portfolio;