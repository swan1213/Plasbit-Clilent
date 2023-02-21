
import React, { useEffect, useState } from 'react';
import { Trans as T } from 'react-i18next';
import draftToHtml from 'draftjs-to-html';
import { Button, Form, Image, Input, Layout, message, Modal } from 'antd';
import { Link, useHistory, useParams } from "react-router-dom";

import './Blog.css';
import { useSelector } from 'react-redux';
import { filterDate, pageType, siteCanonical } from '../../utils/helpers';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

const { Content } = Layout;

let parse = require('html-react-parser');

export const Blog = ({designedRoute, mainPath}) => {
  const [form] = Form.useForm();
  let recaptchaRef = useRef();
  const { route } = useParams();
  const history = useHistory();
  const requestedPage = useSelector(state => state.routePages?.pages)
  .filter((page) => {
    if(route) {
    return page.route === route;
  }else return page.route === designedRoute;
});
  const relatedPages = useSelector(state => state.routePages?.pages)
  .filter((page) => page?.type !== "DesignedBasic" && page?.type === pageType[requestedPage[0]?.type] && page.route !== route);

  if(!requestedPage.length){
    history.push('/page-not-found');
  }
  const [html, setHtml] = useState();
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [description, setDescription] = useState('');
  const [mainimage, setMainimage] = useState('');
  const [altMainimage, setAltMainimage] = useState('');
  const [headline, setHeadline] = useState('');
  const [minread, setMinread] = useState('');
  const [author, setAuthor] = useState('');
  const [authorLink, setAuthorLink] = useState('');
  const [authorImg, setAuthorImg] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const onFinish = async (values) => {
    setLoading(true);
    values.blogSubscription = true;
    const response = await fetch(`${process.env.REACT_APP_URL}methods/subscribe-form`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (response.ok) {
      message.success('Succesfully subscribed');
      form.setFieldsValue({
        email: '',
        recaptcha: ''
      });
      recaptchaRef.current.reset();
    } else {
      message.error(response.error().message);
    }
    setModalOpen(false)
    setLoading(false);
  };

  useEffect(() => {
    if (requestedPage.length) {
      if (requestedPage[0].html) {
        setHtml(parse(draftToHtml(JSON.parse(requestedPage[0].html))));
      }
      setKeywords(requestedPage[0].keywords);
      setDescription(requestedPage[0].description);
      setName(requestedPage[0].name);
      setAltMainimage(requestedPage[0].altmainimage)
      setMainimage(requestedPage[0].mainimage);
      setHeadline(requestedPage[0].headline);
      setMinread(requestedPage[0].minread);
      setAuthor(requestedPage[0].author);
      setAuthorLink(requestedPage[0].authorLink);
      setDateCreated(filterDate(requestedPage[0]?.dateCreated));
      setAuthorImg(requestedPage[0].subImage);
    }
  }, [route]);


  return (
    <>

      <CustomHelmet title={name} description={description} keywords={keywords} canonical={`${siteCanonical.blog}/${route}`}/>

      <Content>
        <div className="App">
          <main className="detail_blog">
            <div className="outer">
            <header className="post_full_header">
              <h1 className="post_full_title">{headline}</h1>
                <section className='author-section'>
                <div className="post_full_meta">
                      <span>{minread} MIN READ</span>
                    </div>
                  <div className='author-container'>
                    <div className='author-inner-container'>
                      <div className='article-author-image'>
                          <div className='author-image-inner-container'>
                            <Image
                              width={50}
                              height={50}
                              src={authorImg}
                              preview = {false}
                              alt = {'author-profile'}
                              rootClassName={'author-profile-image'}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='article-author-data'>
                        <div className='article-author-name'>
                          <a href={authorLink}>
                            <span className='author-name-span'>{author}</span>
                          </a>
                        </div>
                        <div className='article-created-date'><span className='created-date-span'>{dateCreated}</span></div>
                      </div>
                  </div>
                </section>
              </header>
              <div className="inner">
                <article className="post_full">
                  <figure className="post_full_image">
                    <img src={mainimage} alt={altMainimage} />
                  </figure>
                  <section className="post_full_content">
                    <div className="post_content">
                      {html}
                    </div>
                  </section>

                  <div className="read_next_feed">
                    {
                      relatedPages.map((relate, index) => {
                        if(relate) {
                          return (
                            <article className={relatedPages.filter((value) => !!value).length === 1 ? 'post_card_large post_card post' : 'post_card post'} key={index}>
                              <Link to={`${mainPath}/` + relate.route} className="post_card_image_link">
                                <img className="post_card_image" src={relate.mainimage}
                                  alt={relate.headline} />
                              </Link>

                              <div className="post_card_content">
                                <Link to={`${mainPath}/` + relate.route} className="post_card_content_link" >
                                  <header className="post_card_header">
                                    <h2 className="post_card_title">
                                      {relate.headline}
                                    </h2>
                                  </header>
                                  <section className="post_card_excerpt">
                                    <p>{relate.subline}</p>
                                  </section>
                                </Link>
                                <footer className="post_card_meta">
                                  <ul className="author_list">
                                    <li className="author_list_item">
                                      <Link to={`${mainPath}/` + relate.route} className="static_avatar">
                                        <img className="author_profile_image" src={relate.subImage} alt="The PlasBit Team" />
                                      </Link>
                                    </li>
                                  </ul>

                                  <span className="reading_time">
                                    {dateCreated}
                                  </span>
                                </footer>
                              </div>

                            </article>
                          );
                        }
                        return <></>;
                      })
                    }
                  </div>

                  <section className="subscribe_form">
                    <h3 className="subscribe_form_title"><T>blogDetail.subscribe.0</T></h3>
                    <p><T>blogDetail.subscribe.1</T></p>
                    <button className="btn active" onClick={() => setModalOpen(true)}><T>blogDetail.subscribe.3</T></button>
                  </section>
                  <Modal
                    title="Stay tuned with PlasBit Blog"
                    centered
                    open={modalOpen}
                    footer={null}
                    onCancel={() => setModalOpen(false)}
                    okText="Subscribe"
                    width={400}
                    style={{ textAlign: 'center' }}
                  >
                      <div style={{marginTop: '20px'}}>
                        <T>blogDetail.subscribe.2</T>
                      </div>
                      <Form
                        form={form}
                        onFinish={onFinish}
                      >
                        <Form.Item
                          name="email"
                          style={{ marginTop: "30px", marginBottom: "30px" }}
                          rules={[
                            {
                              required: true,
                              message: <T>required.input</T>,
                            },
                          ]}
                        >
                          <Input placeholder="Email address" type="email"/>
                        </Form.Item>
                        <Form.Item
                          className='recaptcha'
                          name="recaptcha"
                          rules={[
                            {
                              required: true,
                              message: <T>required.recaptcha</T>,
                            },
                          ]}
                        >
                          <ReCAPTCHA style={{ width: '365px !important'}} ref={recaptchaRef} hl="en" sitekey={process.env.REACT_APP_RECAPCHA_CLIENT} />
                        </Form.Item>
                        <Form.Item >
                          <Button style={{ marginBottom: "20px"}} type="primary" loading={loading} disabled={loading} htmlType="submit">
                            <T>blogDetail.subscribe.3</T>
                          </Button>
                        </Form.Item>
                      </Form>
                  </Modal>
                </article>
              </div>
            </div>
          </main>
        </div>
      </Content>
    </>
  );
};

export { Blog as default } from './Blog';
