import React, { useRef, useState } from 'react';
import { Trans as T } from 'react-i18next';
import i18n from "i18next";
import { Button, Form, Input, message, } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import { getImg, useResize } from '../../../utils/helpers';
import './Second.css';

const { TextArea } = Input;

export const ContactSecond = () => {
  const [form] = Form.useForm();
  let recaptchaRef = useRef();
  const { isMobile } = useResize();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    const response = await fetch(`${process.env.REACT_APP_URL}methods/contact-form`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (response.ok) {
      message.success('Email sent!');
      form.setFieldsValue({
        name: '',
        phone: '',
        email: '',
        subject: '',
        messages: '',
        recaptcha: ''
      });
      recaptchaRef.current.reset();
    } else {
      message.error(response.error().message);
    }

    setLoading(false);
  };

  return (
    <section className="contact_second">
      <div className="contact_container">
        <img className="vector" src={getImg('contact/vector.png')} alt="contact"/>
        <div className="left_side">
          <h2 className="title">
            <T>contactPage.message.title.0</T> <span><span><T>contactPage.message.title.1</T></span></span>
          </h2>
          <Form hideRequiredMark={true}
                layout={'vertical'}
                form={form}
                name="contactUsForm"
                initialValues={{ remember: false }}
                onFinish={onFinish}
          >
            <Form.Item name="name"
                       rules={[
                         {
                           required: true,
                           message: <T>required.input</T>,
                         },
                       ]}
            >
              <Input placeholder={i18n.t('contactPage.message.name')} type="text"/>
            </Form.Item>
            <Form.Item name="phone"
                       rules={[
                         {
                           required: true,
                           message: <T>required.input</T>,
                         },
                       ]}
            >
              <Input placeholder={i18n.t('contactPage.message.phone')} type="text"/>
            </Form.Item>
            <Form.Item name="email"
                       rules={[
                         {
                           required: true,
                           message: <T>required.input</T>,
                         },
                       ]}
            >
              <Input placeholder={i18n.t('contactPage.message.email')} type="email"/>
            </Form.Item>
            <Form.Item name="subject"
                       rules={[
                         {
                           required: true,
                           message: <T>required.input</T>,
                         },
                       ]}
            >
              <Input placeholder={i18n.t('contactPage.message.subject')} type="text"/>
            </Form.Item>
            <Form.Item name="messages"
                       rules={[
                         {
                           required: true,
                           message: <T>required.input</T>,
                         },
                       ]}
            >
              <TextArea placeholder={i18n.t('contactPage.message.message')} rows={4}/>
            </Form.Item>
            <Form.Item name="recaptcha" className='recaptcha_field' rules={[
              {
                validator: async (_, reCaptcha) => {
                  if (reCaptcha) {
                    return Promise.resolve();
                  }
                  return Promise.reject(<T>required.recaptcha</T>);
                },
              },
            ]}
            >
              <ReCAPTCHA ref={recaptchaRef} hl="en" sitekey={process.env.REACT_APP_RECAPCHA_CLIENT} /> 
            </Form.Item>
            <Form.Item className='submit_btn_input'>
              <Button loading={loading} disabled={loading} htmlType="submit">
                <T>contactPage.message.button</T>
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="right_side"
             style={{ backgroundImage: `url(${getImg('contact/right_bg.png')})` }}>
          <div className="title text_white">
            <T>contactPage.information.title.0</T> {!isMobile &&
          <br/>}<T>contactPage.information.title.1</T>
          </div>
          <div className="contact_detail">
            <a href="https://goo.gl/maps/AMcy7yZWJqKC3s6f7" target="_blank" rel="noreferrer"><img
              src={getImg('contact/pin.png')} alt="contact"/></a>
            <a href="https://goo.gl/maps/AMcy7yZWJqKC3s6f7" target="_blank"
               className="text text_white" rel="noreferrer">
              {!isMobile && <><T>contactPage.information.location.0</T><br/>
                <T>contactPage.information.location.1</T><br/>
                <T>contactPage.information.location.2</T></>}
              {isMobile && <><T>contactPage.information.locationMobile.0</T><br/>
                <T>contactPage.information.locationMobile.1</T><br/>
                <T>contactPage.information.locationMobile.2</T><br/>
                <T>contactPage.information.locationMobile.3</T></>}
            </a>
          </div>
          <div className="contact_detail">
            <a href="mailto:support@plasbit.com"><img src={getImg('contact/email.png')} alt="email"/></a>
            <a href="mailto:support@plasbit.com" className="text text_white">
              <T>contactPage.email</T>
            </a>
            ``
          </div>
          <div className="contact_detail">
            <a href="https://telegram.me/plasbit" target='_blank' rel="noreferrer"><img
              src={getImg('contact/telegram.png')} alt="telegram"/></a>
            <a href="https://telegram.me/plasbit" target='_blank' className="text text_white" rel="noreferrer">
              <T>contactPage.telegram</T>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
