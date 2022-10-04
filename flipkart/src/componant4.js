import "./componant4.css";
import img1 from "./image/Flipkart4 (1).png";
import img2 from "./image/Flipkart4 (2).png";
import img3 from "./image/Flipkart4 (3).png";
import img4 from "./image/Flipkart4 (4).png";
import img5 from "./image/Flipkart4 (5).png";
import img6 from "./image/Flipkart4 (6).png";
import img7 from "./image/Flipkart4 (7).png";
import img8 from "./image/Flipkart4 (8).png";


export default function Componant4() {
  return (
    <div className="tsk_04_sec">
        <div className="divA">
          <div className="tsk04_nav">
            <h3>Deals of the days</h3>
            <p>&#128339; 23:10:50 left</p>
            <button id="view_bt">View All</button>
          </div>
          <hr />
          <div className="tsk_04_img_sec_01">
            <div className="Div_flex">
              <div className="tsk_04_img_sec_01_01">
                <div>
                  <img className="tsk04_image" src={img1} alt="" />
                </div>

                <div className="width_para_tsk04">
                  <p>
                    <b>Deals on furnishing</b>
                  </p>
                  <p>upto 40% off</p>
                  <p className="tsk_04_para">cushions,pillow and more</p>
                </div>
              </div>
              <div className="tsk_04_img_sec_01_01">
                <div>
                  <img className="tsk04_image" src={img2} alt="" />
                </div>

                <div>
                  <p>
                    <b>Deals</b>
                  </p>
                  <p>upto 55% off</p>
                  <p className="tsk_04_para">Top Deals</p>
                </div>
              </div>
              <div className="tsk_04_img_sec_01_01">
                <div>
                  <img className="tsk04_image" src={img3} alt="" />
                </div>

                <div>
                  <p>
                    <b>best deals on kids clothes</b>
                  </p>
                  <p>upto 50% + Extra 10% off</p>
                  <p className="tsk_04_para">Hurry,Don't Miss Out!</p>
                </div>
              </div>

              <div className="tsk_04_img_sec_01_01">
                <div>
                  <img className="tsk04_image" src={img4} alt="" />
                </div>
              
              <div>
                <p>
                  <b>remote control,indoor games</b>
                </p>
                <p>upto 80% + Extra 10% off</p>
                <p className="tsk_04_para">Miss and chif logo and more</p>
              </div>
              </div>
            </div>
            <div className="Div_flex">
              <div className="tsk_04_img_sec_01_01">
                <div>
                  <img className="tsk04_image" src={img5} alt="" />
                </div>

                <div>
                  <p>
                    <b>kurta Set</b>
                  </p>
                  <p>under 499</p>
                  <p className="tsk_04_para">trending styles</p>
                </div>
              </div>

              <div className="tsk_04_img_sec_01_01">
                <div>
                  <img className="tsk04_image" src={img6} alt="" />
                </div>

                <div>
                  <p>
                    <b>designer bedsheeat</b>
                  </p>
                  <p>From 149</p>
                  <p className="tsk_04_para">Best SElling</p>
                </div>
              </div>

              <div className="tsk_04_img_sec_01_01">
                <div>
                  <img className="tsk04_image" src={img7} alt="" />
                </div>

              
                <p>
                  <b>Sarees for wedding</b>
                </p>
                <p>FRom rs 199+ Extra 10% off</p>
                <p className="tsk_04_para">Hurry,Don't Miss Out!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tsk_04_sec_02">
          <img className="tsk_04_side-img" src={img8} alt="" />
        </div>
      </div>
  )
}

