import "./popup.css";
import"../App.css"
import { useEffect } from "react";
import { useState } from "react";
import App from "../App";



interface ModalProps {
  handleClosePopup: () => void;
}


const Modal: React.FC<ModalProps> = ({ handleClosePopup }) => {
  

return(
    <div className="modal modal-otp" >
          <img src="otp.png" alt="" />
      <div className="modal__content" >

      
        <div className="modal__body">
             
<div className="button-close" onClick={handleClosePopup }>
              <link rel="stylesheet"
          href="http://mozilla.github.io/foundation-icons/assets/foundation-icons.css "
            />
            <span   className="icon-hamburger-menu-close"></span>  
            </div>
          <h2 id="tilte-popup"> Kích hoạt SIM GIC</h2>
          <div className="modal-otp__content">
            <div className="modal-data__info">
              <p className="modal-data__des">
                Tính năng kích hoạt SMS GIC chỉ dành cho khách hàng đã mua SIM
                online
              </p>
              <p className="modal-data__note">
                Mọi thắc mắc xin liên hệ 18008168(miễn phí){" "}
              </p>
            </div>
            <div className="modal-btn">
              <a
                href="https://viettel.vn/dang-ky-sim-so"
                className="btn-default btn-color"
                id="btn1"
              >
                Mình đã mua SIM GIC
              </a>
              <a className="btn-default btn-buy" id="btn2" onClick={handleClosePopup} >
                Mình chưa mua SIM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}



export default Modal;