import React, { useState, useEffect } from 'react';
import { Trans as T } from 'react-i18next';
import { getLocalImg } from '../../../utils/helpers';
import './Third.css';

export const PaymentThird = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth > 1700);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setReload(!reload);
  }, [currentWidth]);

  window.onresize = () => {
    if (window.innerWidth > 1700) {
      setCurrentWidth(true);
    } else {
      setCurrentWidth(false);
    }
  };

  return (
    <div className="payment_third">
      <div className="payment_third_container">
        <div className="payment_third_partgroup1">
          {!currentWidth
          && (
          <div className="payment_third_p80">
            <div className="payment_third_font65"><T>paymentPage.third.title</T></div>
            <div className="payment_third_font35">
              <T>paymentPage.third.subtitle</T>
            </div>
          </div>
          )}
          <div className="payment_third_part1">
            <div className="payment_third_font30">
              <T>paymentPage.third.part_1.0</T>
            </div>
            <div className="payment_third_imgbase">
              <img src={getLocalImg('payment/circle_1.webp')} alt="circle" />
            </div>
            <div className="payment_third_arrowgroup1">
              <div className="payment_third_font21">
                <p className="payment_third_font40">
                  <T>paymentPage.third.part_1.2</T>
                </p>
                <T>paymentPage.third.part_1.3</T>
              </div>
              <div className="payment_third_arrow1"><img src={getLocalImg('payment/arrow_1.webp')} alt="arrow" /></div>
              <div className="payment_third_font30">
                <p className="payment_third_font53"><T>paymentPage.third.part_1.1</T></p>
              </div>
            </div>
          </div>
          {currentWidth
              && (
              <div className="payment_third_p80">
                <div className="payment_third_font65"><T>paymentPage.third.title</T></div>
                <div className="payment_third_font35"><T>paymentPage.third.subtitle</T></div>
              </div>
              )}
          <div className="payment_third_part2">
            {!currentWidth
             && (
             <>
               <div className="payment_third_font30"><T>paymentPage.third.part_2</T></div>
               <div className="payment_third_imgbase">
                 <img src={getLocalImg('payment/circle_3.webp')} alt="circle" />
               </div>
               <div className="payment_third_arrow5">
                 <img src={getLocalImg('payment/arrow_2.webp')} alt="arrow" />
               </div>
             </>
             )}
            {currentWidth
              && (
              <>
                <div className="payment_third_font30">
                  <T>paymentPage.third.part_5.0</T>
                </div>
                <div className="payment_third_imgbase">
                  <img src={getLocalImg('payment/circle_2.webp')} alt="circle" />
                </div>
                <div className="payment_third_arrowgroup2">
                  <div className="payment_third_text1">
                    <p className="payment_third_font40">
                      <T>paymentPage.third.part_5.1</T>
                    </p>
                    <T>paymentPage.third.part_5.2</T>
                  </div>
                  <div className="payment_third_arrow3"><img src={getLocalImg('payment/arrow_2.webp')} alt="arrow" /></div>
                  <div className="payment_third_arrow2"><img src={getLocalImg('payment/arrow_2.webp')} alt="arrow" /></div>
                  <div className="payment_third_text2">
                    <T>paymentPage.third.part_5.3</T>
                  </div>
                </div>
              </>
              )}
          </div>
        </div>
        <div className="payment_third_partgroup2">
          <div className="payment_third_part3">
            <div>
              {currentWidth
              && (
              <>
                <div className="payment_third_imgbase">
                  <img src={getLocalImg('payment/circle_3.webp')} alt="circle" />
                </div>
                <div className="payment_third_font30">
                  <T>paymentPage.third.part_2</T>
                </div>
              </>
              )}
              {!currentWidth
                && (
                  <>
                    <div className="payment_third_font30">
                      <T>paymentPage.third.part_3.0</T>
                    </div>
                    <div className="payment_third_font21 payment_third_center">
                      <T>paymentPage.third.part_3.1</T>
                    </div>
                    <div className="payment_third_imgbase">
                      <img src={getLocalImg('payment/circle_4.webp')} alt="circle" />
                    </div>
                  </>
                )}
            </div>
            <div className="payment_third_arrow4">
              {currentWidth
                ? <img src={getLocalImg('payment/arrow_3.webp')} alt="arrow" />
                : <img src={getLocalImg('payment/arrow_2.webp')} alt="arrow" />}
            </div>
          </div>
          <div className="payment_third_part4">
            <div>
              {!currentWidth
                && (
                <>
                  <div className="payment_third_font30">
                    <T>paymentPage.third.part_4</T>
                  </div>
                  <div className="payment_third_imgbase">
                    <img src={getLocalImg('payment/circle_5.webp')} alt="circle" />
                  </div>
                </>
                )}
              {currentWidth
                && (
                <>
                  <div className="payment_third_font21 payment_third_center">
                    <T>paymentPage.third.part_3.1</T>
                  </div>
                  <div className="payment_third_imgbase">
                    <img src={getLocalImg('payment/circle_4.webp')} alt="circle" />
                  </div>
                </>
                )}
              {currentWidth
                && (
                <div className="payment_third_font30">
                  <T>paymentPage.third.part_3.0</T>
                </div>
                )}
            </div>
            {currentWidth
              ? (
                <div className="payment_third_arrow5">
                  <img src={getLocalImg('payment/arrow_3.webp')} alt="arrow" />
                </div>
              )
              : (
                <div className="payment_third_arrowgroup1-mobile">
                  <div className="payment_third_text1">
                    <p className="payment_third_font60">
                      <T>paymentPage.third.part_5.1</T>
                    </p>
                    <T>paymentPage.third.part_5.2</T>
                  </div>
                  <img src={getLocalImg('payment/arrow_2.webp')} alt="arrow" />
                  <img src={getLocalImg('payment/arrow_1.webp')} alt="arrow" />
                  <div className="payment_third_text2">
                    <T>paymentPage.third.part_5.3</T>
                  </div>
                </div>
              )}
          </div>
          <div className="payment_third_part5">
            <div style={{ margin: 'auto' }}>
              {!currentWidth
              && (
              <>
                <div className="payment_third_font30">
                  <T>paymentPage.third.part_5.0</T>
                </div>
                <div className="payment_third_imgbase">
                  <img src={getLocalImg('payment/circle_2.webp')} alt="circle" />
                </div>
              </>
              )}
              {currentWidth
              && (
              <>
                <div className="payment_third_imgbase">
                  <img src={getLocalImg('payment/circle_5.webp')} alt="circle" />
                </div>
                <div className="payment_third_font30">
                  <T>paymentPage.third.part_4</T>
                </div>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
