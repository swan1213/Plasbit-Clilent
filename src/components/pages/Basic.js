
import React, { useEffect, useState } from 'react'
import { Layout } from 'antd';
import { Helmet } from 'react-helmet-async';

import './Basic.css'
import { useSelector } from 'react-redux';


const { Content } = Layout;

export const Basic = ({route}) => {

  const requestedPage = useSelector(state => state.routePages?.pages)
  .filter((page) => page.route === route);

  const [html, setHtml] = useState();
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    if (requestedPage[0]?.html) {
      setHtml(requestedPage[0].html);
    }
    setKeywords(requestedPage[0]?.keywords);
    setDescription(requestedPage[0]?.desc);
    setName(requestedPage[0]?.name);
  }, []);

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
      </Helmet>

      <Content>
        <section className="basic">
          <div className="tab_content active" style={{padding: 0}}>
            <div className="index_content">
              <div className="content">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </div>
            </div>
          </div >
        </section>
      </Content>
    </>
  );
}

export { Basic as default } from './Basic'

