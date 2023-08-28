import React from 'react';
import "../component/stylepopup1.css"


interface Popup3Props {
  onClose: () => void;
}

const Popup3: React.FC<Popup3Props> = ({ onClose }) => {
  return (
    <div className='popup_A1'>
        <div className="button-close" onClick={onClose }>
              <link rel="stylesheet"
          href="http://mozilla.github.io/foundation-icons/assets/foundation-icons.css "
            />
            <span   className="icon-hamburger-menu-close" id='close_btn2'></span>  
            </div>
        <img className='img-backround' src="otp.png" alt="" />
        <div> <img id='img2'  className='safari1_img' src="Safari_03.png" alt="" /></div>
        <div className='btn-gic' id='btn_1'>
        <a onClick={onClose} id='btn_cf' className="btn-default btn-color">Đã hiểu</a>
       
        
        </div>
      </div>
  );
};

export default Popup3;