import React from 'react';
import logo from "./img/icons/site-logo.svg";
import s2 from "./img/icons/section2-ic.svg"
import s3 from "./img/icons/section3-ic.svg"
import s4 from "./img/icons/section4-ic.svg"
import s5 from "./img/icons/section5-ic.svg"
import s6 from "./img/icons/section6-ic.svg"

import fb from "./img/icons/social-fb-ic.svg"
import is from "./img/icons/social-inst-ic.svg"
import tt from "./img/icons/social-tiktok-ic.svg"
import vk from "./img/icons/social-vk-ic.svg"

function Menu() {
	return (
		<>
		<div className="Menu">
	    <a href="#" className="MI LogoA"><img src={logo} className="Logo"/></a>
	    <a href="#" className="MI"><img src={s2} className="MII"/></a>
	    <a href="#" className="MI"><img src={s3} className="MII"/></a>
	    <a href="#" className="MI"><img src={s4} className="MII"/></a>
	    <a href="#" className="MI"><img src={s5} className="MII"/></a>
	    <a href="#" className="MI"><img src={s6} className="MII"/></a>
	  </div>
	  <div className="BottomMenu">
	    <a href="#" className="BMI"><img src={fb} className="BMII"/></a>
	    <a href="#" className="BMI"><img src={is} className="BMII"/></a>
	    <a href="#" className="BMI"><img src={tt} className="BMII"/></a>
	    <a href="#" className="BMI"><img src={vk} className="BMII"/></a>
	  </div>
	  </>
	);
}

export default Menu;