import React from 'react'
import { useState, useEffect  } from 'react';
import { Typography } from '@mui/material';
import './CHEmbeddedList.css'; // Importing the CSS file
import CompanyPerformance from './CompanyPerformance';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EmbeddedListNavbar from './EmbeddedListNavbar';

const CHEmbeddedListCards = ({ json1, mobileNumber, isVisible, setIsVisible, OTPGenerate, lenderProduct, setLenderProduct, errorPopup2, setErrorPopup2, errorPopup, lenderCpi, setLenderCpi, lenderApplicationLink, setLenderApplicationLink, lender_id, setLender_id, SSO}) => {

    const [lenderName, setlenderName] = useState();
  const [link, setLink] = useState();
  const [isHidden, setIsHidden] = useState('none');
  const [count, setCount] = useState(0);
  const [productsArr, setProductsArr] = useState([]);
 


  const divStyle = {
    display: isHidden ? 'none' : 'block', // Or 'inline-block' depending on your layout needs
    // Add other styles as needed
    // Example: backgroundColor: 'lightblue',
  };



  // OTP Verify From Backend--------------------------------------------------------------------------------


  // ------------------------------------------------------------------------------------------------------

  // ---------Handle OTP Function -----------------------------------------------------------------------



  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleOTPComponent = () => {
    OTPGenerate();
    
    // setIsVisible(true);

  };

  useEffect(() => { //This will be called when the user clicks on the getLoan button 
    if (lenderProduct !== '') {
      handleOTPComponent();
      console.log("Inside Usestate of lender product ", productsArr);
      
    }
  }, [lenderProduct, productsArr, lenderCpi, lenderApplicationLink, lender_id])

  return (
    <div>
      <div style={{padding:'10px',paddingTop:'0px'}}>
      {json1.lender_details.map((lender, index) => (
        <div key={index} className={lender.product_id} >
          <div  className="card-container">
              <div className="card-content">
              <div className="" style={{width:'50%',float:'left',margin:'auto'}}>
              <div className="text-content" style={{width:'50%',padding:'10px',margin:'auto',marginLeft:'0px'}}>
                <img alt="logo" src={lender.logo} className="logo"  style={{display:'flex',justifyContent:'center',width:'100%',height:'auto',maxWidth:'60px',minWidth:'0px'}}/>
                
              </div>
                </div>
                <div className="text-content" style={{width:'50%',float:'right'}}>
                  <Typography variant="h5" component="div" className="title" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                    {lender.product}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="data" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  {lender.description}
                  </Typography>
                </div>
              </div>
              <div className="details">
                <div className="detail">
                  <Typography variant="body2" color="textSecondary" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                    <span className="detail-label">{lender.maxloanamount}</span> <br />Max Amount
                  </Typography>
                </div>
                <div className="detail">
                  <Typography variant="body2" color="textSecondary" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                    <span className="detail-labels" >{lender.tenure}</span> <br />Tenure
                  </Typography>
                </div>
                <div className="detail">
                  <Typography variant="body2" color="textSecondary" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                    <span className="detail-labels" >{lender.interest}</span> <br />Interest
                  </Typography>
                </div>
              </div>
              <div className="action-button">
                {/* <Link to={`/NewPersonalLoan/${lender.product}`} className="getLoanButtonLink"> */}
                {/* <button onClick={(e) => getLoanBackend(e, lender.product)} */}
                {/* <button onClick={(e) => handleOTPComponent(e,lender.product)} */}
                
                <button onClick={(e) => {
                  setLenderProduct(lender.product);
                  setProductsArr((prevProductsArr) => [...prevProductsArr, lender.product]);
                  setLenderCpi(lender.cpi);
                  setLenderApplicationLink(lender.applicationlink)
                  setLender_id(lender.product_id);
                }} size="small"
                  variant="contained"
                  className="getLoanButton">

                  Get Loan
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
        .hide{
          display: none;
        }
        .show{
        display:block;
        }
      `}
      </style>
    </div>
  )
}

export default CHEmbeddedListCards
