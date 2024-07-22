import React from 'react';
import aws from '../../images/aws.svg';
import exp from '../../images/Experian.svg';
import ssl from '../../images/ssl.png';
import data from '../../images/data security.png';


const KeyPartners = () => {
  return (
        <>
    <section class="container">
        <div class="row text-center">
          <div class="benefits-home" style={{marginBottom:"30px"}}>
            <h2>Key partners</h2></div>
          <div class="col-md-6 col-lg-4 col-xl-3">
           
              <div class="benefits-home_listf">
              <i class=""><img src={exp} style= {{width:"120px",height:"40px"}}/></i>
              </div>
              <div class="benefits-home_lists">
               Credit score
              </div>        
          </div>
          <div class="col-md-6 col-lg-4 col-xl-3">
           
              <div class="benefits-home_listf">
                 <i class=""><img src={aws} style= {{width:"50px",height:"50px"}}/></i>
              </div>
              <div class="benefits-home_lists">
                AWS
              </div>         
          </div>
          
          
          <div class="col-md-6 col-lg-4 col-xl-3">
          
              <div class="benefits-home_listf">
                <i class=""><img src={ssl} style= {{width:"50px",height:"50px"}}/></i>
              </div>
              <div class="benefits-home_lists">
                SSL
              </div>        
          </div>
          
          
          <div class="col-md-6 col-lg-4 col-xl-3">
            
              <div class="benefits-home_listf">
                <i class=""><img src={data} style={{width:"50px",height:"50px"}}/></i>
              </div>
              <div class="benefits-home_lists">
                Data security
              </div>         
          </div>
          </div>
      </section>
      
</>
  
  )
}

export default KeyPartners