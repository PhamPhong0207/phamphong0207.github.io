import React from 'react';
import "../component/stylepopup1.css"
import "./popup"
import "../App.css"
import "./popup.css"
import "./click-popup2"
// Define a functional component named MyComponen
interface Box1Props {
  onOpenPopup2: () => void;
  onClose: () => void;
  }

const Box1: React.FC<Box1Props> = ({ onOpenPopup2, onClose  }) => {
  
    
  return (
 
   
       
           <div className='popup_A1'>
        <div className="button-close" onClick={onClose }>
              <link rel="stylesheet"
          href="http://mozilla.github.io/foundation-icons/assets/foundation-icons.css "
            />
            <span   className="icon-hamburger-menu-close" id='close_btn2'></span>  
            </div>
        <img className='img-backround' src="otp.png" alt="" />
        <div> <img  className='safari1_img' src="safari1.png" alt="" /></div>
        <div className='btn-gic' id='btn_1'>
        <a onClick={onOpenPopup2} id='btn_cf' className="btn-default btn-color">Tiếp tục</a>
       
        
        </div>
      </div>
   
     
    
  );
};

export default Box1;
