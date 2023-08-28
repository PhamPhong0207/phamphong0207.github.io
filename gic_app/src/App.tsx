import React from "react";
import "./App.css";
import { useState } from "react";
import Modal from "./component/popup";
import Box1 from "./component/click-popup1";
import Popup2 from "./component/click-popup2";
import Popup3 from "./component/click-popup3";
import Page2 from "./component/chosse-data";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
interface App {
  onClose: () => void;
}


const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const click_gic = () => {
    setIsVisible((prevState) => !prevState);
  }; //set ẩn hiện nút TRUY cập GIC với 1 "chạm"

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    console.log("close");
  };

  const totalElements = 12; // Tổng số phần tử
  const initialVisibleElements = 6; // Số phần tử hiển thị ban đầu

  const [visibleElements, setVisibleElements] = useState(
    initialVisibleElements
  );
  // đây là state hook, là giá trị hiện tại của phần tử trong danh sách,
  // 'setVisibleElements' là hàm để cập nhật giá trị của 'visibleElements'
  const [expanded, setExpanded] = useState(true);
  //Dùng để theo dõi của việc danh sách mở rộng hay thu gọn
  //'expanded' là giá trị hiện tại của state

  const [confirm, setConfirm] = useState(false);
  const handClickConfirm = () => {
    setConfirm(true);
    console.log("click continue");
  };
  const handCloseConfirm = () => {
    setConfirm(false);
    console.log("close");
  };

  const [popup1Visible, setPopup1Visible] = useState(false);
  const [popup2Visible, setPopup2Visible] = useState(false);
  const [popup3Visible, setPopup3Visible] = useState(false);

  const openPopup1 = () => {
    setPopup1Visible(true);
    click_gic();
  };

  const openPopup2 = () => {
    setPopup2Visible(true);
    setPopup1Visible(false); // Close Popup1
  };
  const openPopup3 = () => {
    setPopup3Visible(true);
    setPopup2Visible(false); // Close Popup2
    console.log("open popup3");
  };

  const closePopup1 = () => {
    setPopup1Visible(false);
  };

  const closePopup2 = () => {
    setPopup2Visible(false);
  };

  const closePopup3 = () => {
    setPopup3Visible(false);
    console.log("close popup3");
  };

  //set confirm trong Onclick Gic

  const toggleExpand = () => {
    setExpanded(!expanded);
    // Nếu đang mở rộng, hiển thị toàn bộ phần tử, ngược lại hiển thị 6 phần tử
    setVisibleElements(expanded ? totalElements : initialVisibleElements);
  };

  const toppings  = [
    {
      name: "Tiktok",
      price: "10K   ",
      day: "/30 ngày",
      description: "Miễn phí truy cập ứng dụng",
      image: "./tiktok.png",
    },
    {
      name: "Facebook",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./facebook.png",
    },
    {
      name: "Youtube",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./youtube.png",
    },
    {
      name: "Zalo",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./zalo.png",
    },
    {
      name: "TV360",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./tv360.png",
    },
    {
      name: "Data",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./elsa.png",
    },
    {
      name: "WhatsApp",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./whatsapp.png",
    },
    {
      name: "Viber",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./viber.png",
    },
    {
      name: "Mocha",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./mocha.png",
    },
    {
      name: "ZingMP3",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./zingmp3.png",
    },
    {
      name: "Waka",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./waka.png",
    },
    {
      name: "NCT",
      price: "10K ",
      day: "/30 ngày",
      description: "Miễn phí Data truy cập ứng dụng",
      image: "./nct.png",
    },
  ];

  return (
    <div>
    <div className="GIC-HOME">
      <div className="header-banner">
        <img src="./banner-4.png" alt="" />
        <div className="content">
          <div className="head-recharge">
            <div className="content-head-sim">
              <a>
                <img src="./Logo-GIC.png" alt="" />
              </a>
            </div>
          </div>
          <div className="head-content">
            <h2 className="title-content">Khám phá bất tận</h2>
            <p className="des-content">mua gói cước GIC để trải nghiệm ngay</p>
          </div>
        </div>
      </div>
      <div className="gic-package">
        <div className="content">
          <ul className="list-package">
            <li className="item-package">
              <div className="image-pack">
                <img src="./pack-1.png" alt="" />
              </div>
              <div className="content-pack">
                <div className="head-pack">
                  <p className="name-pack">GIC70</p>
                </div>
                <div className="body-pack">
                  <div className="marquee-container">
                    <div className="marquee">
                      <div className="initial-child-container">
                        <div className="child">
                          <div className="running-text-1">
                            <h1 className="title-pack">
                              1GB
                              <span>/ 30 ngày</span>
                              1GB
                              <span>/ 30 ngày</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-pack">
                    <p className="desc-pack">
                      1GB/ngày. Nghe nhạc, xem phim miễn phí. Mạng xã hội đồng
                      giá 10K
                    </p>
                  </div>
                  <p className="price-pack">
                    70K
                    <span>| 30 ngày</span>
                  </p>
                </div>

                <div className="btn-gic-package">
                  <a className="btn-default btn-buy">Mua ngay</a>
                </div>
              </div>
            </li>
            <li className="item-package">
              <div className="image-pack">
                <img src="./pack-2.png" alt="" />
              </div>
              <div className="content-pack">
                <div className="head-pack">
                  <p className="name-pack">GIC70T</p>
                </div>
                <div className="body-pack">
                  <div className="marquee-container">
                    <div className="marquee">
                      <div className="initial-child-container">
                        <div className="child">
                          <div className="running-text-2">
                            <h1 className="title-pack">
                              10GB
                              <span>/ 30 ngày</span>
                              10GB
                              <span>/ 30 ngày</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-pack">
                    <p className="desc-pack">
                      10GB Data. Nghe nhạc, xem phim miễn phí. Mạng xã hội đồng
                      giá 10K
                    </p>
                  </div>
                  <p className="price-pack">
                    70K
                    <span>| 30 ngày</span>
                  </p>
                </div>
                <div className="btn-gic-package">
                  <a className="btn-default btn-buy">Mua ngay</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="gic-topping">
        <div className="content">
          <h2 className="title-content">
            Kho topping
            <br />
            Thoải mái lựa chọn
          </h2>
          <div className="bg-topping">
            <img className="bg-top1 " src="./circle-1.png" alt="" />
            <img className="bg-top2 " src="./circle-2.png" alt="" />
          </div>
          <ul className="list-topping">
            {toppings.slice(0, visibleElements).map((topping, index) => (
              <li key={index} className="item-topping" id={`item-topping-${index + 1}`}>
                <div className="images-topping">
                  <img src={topping.image} alt="" />
                </div>
                <div className="content-topping">
                  <div className="head-topping">
                    <h3 className={`name-topping name-${index + 1}`}>
                      {topping.name}
                    </h3>
                    <p className="price-topping">
                      {topping.price}
                      <span>{topping.day}</span>
                    </p>
                  </div>
                  <p className="desc-topping">{topping.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="see-more">
            <div className="btn-gic">
              <div className="btn-default btn-gic" onClick={toggleExpand}>
                <i className={`fs-angle-down${expanded ? " rotated" : ""}`}></i>
                <span>{!expanded ? "Thu gọn" : "Xem thêm"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gic-shop">
        <a href="https://m.viettelstore.vn/landing/dien-thoai-tre-goi-cuoc-re.html">
          <img
            src="https://media.vietteltelecom.vn/upload/ckfinder/images/30_6%20_%20Banner%20GIC%20shop.png"
            alt=""
          />
        </a>
      </div>
      <div className="gic-experience">
        <div className="content-gic-experience">
          <div className="banner-sim">
            <a>
              <img className="banner-3" src="./banner-3.png" alt="" />
            </a>
          </div>
          <h2 className="title-content-experience">
            Cá nhân hoá trải nghiệm mua SIM cùng
          </h2>
          <div   className="btn-gic">
            <a  className="btn-default btn-color">Bắt đầu trải nghiệm</a>
          </div>
   
        </div>
      </div>
      <div className="gic-nav">
        {isPopupOpen && <Modal handleClosePopup={handleClosePopup} />}
      </div>

      {isVisible && (
        <div>
          <div className="nav-notice-panel" onClick={openPopup1}>
            <span>
              <img className="img_arrow" src="arrow.svg" alt="" />
              Truy cập GIC chỉ với 1 "Chạm"
            </span>
          </div>
        </div>
      )}
      {popup1Visible && (
        <div>
          <Box1 onOpenPopup2={openPopup2} onClose={closePopup1} />{" "}
          {/* Use MyComponent here */}
        </div>
      )}

      <div className="list_fixed">
        <ul className="list-nav">
          <li className="item-nav">
            <div onClick={handleOpenPopup}>
              <img src="./active-sim.png" alt="" />
              <p className="text-nav">Kích hoạt SIM</p>
            </div>
          </li>
          <li className="item-nav">
            <a href="https://viettel.vn/pay">
              <img src="./recharge.png" alt="" />
              <p className="text-nav">Nạp thẻ</p>
            </a>
          </li>
          <li className="item-nav">
            <a href="https://viettel.vn/dang-nhap">
              <img src="./search-info.png" alt="" />
              <p className="text-nav">Tra cứu thông tin</p>
            </a>
          </li>
          <li className="item-nav">
            <a href="https://viettel.vn/tra-cuu-ma-don-hang">
              <img src="./search-order.png" alt="" />
              <p className="text-nav">Tra cứu đơn hàng</p>
            </a>
          </li>
        </ul>
      </div>

      {(isPopupOpen || popup1Visible || popup2Visible || popup3Visible) && (
        <div className="background"></div>
      )}
      {popup2Visible && (
        <div>
          <Popup2 openPopup3={openPopup3} onClose={closePopup2} />
        </div>
      )}
      {popup3Visible && (
        <div>
          <Popup3 onClose={closePopup3} />
        </div>
      )}
    </div>
    </div>
    
  );
};
export default App;
