import React from 'react';

function Heading() {
	return (
	<div className="HeadingContainer">
    <div className="HC_Left">
      <div className="HCL HCLC1"></div>
      <div className="HCL HCLC2"></div>
      <div className="HCL HCLC3"></div>
      <div className="HCL HCLC4"></div>
    </div>
    <div className="HC_Right">
      <h1 className="HCR_MT">Art<br/><span>studio</span></h1>

      <div className="HCR_Content">
        <p className="HCRC">photography</p>
        <p className="HCRC">art</p>
        <p className="HCRC">design and branding</p>
      </div>
    </div>
  </div>
	);
}

export default Heading;