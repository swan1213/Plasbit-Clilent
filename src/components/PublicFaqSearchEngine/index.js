import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';
import { findKeyWordIndexInBlocks, useResize } from '../../utils/helpers';
import './searchEngine.css';

export const PublicFaqSearchEngine = ({ allFaqArticles }) => {
  const { isMobile, isResponsive } = useResize();
  const [noResult, setNoResult] = useState(false);
  const [requestedResult, setRequestedResult] = useState('');

  const history = useHistory();

  const checkIfUserInputExists = (userInputValue) => {
    if (userInputValue) {
      return allFaqArticles?.filter(
        (article) => (
          article?.name.toLowerCase().includes(userInputValue.toLowerCase())
          || JSON.parse(article?.html)?.blocks[
            findKeyWordIndexInBlocks(userInputValue, JSON.parse(article?.html)?.blocks)
          ]?.text.includes(userInputValue.toLowerCase())
        ),
      );
    }
    return [];
  };

  const leadToSearchedResult = (userInput) => {
    const userInputValue = userInput.userSearchResult;
    const data = checkIfUserInputExists(userInputValue);
    if (!(data.length)) {
      setNoResult(true);
      setRequestedResult(userInputValue);
      return;
    }
    setNoResult(false);
    history.push({
      pathname: `/public-faq-search-result/${userInputValue}`,
    });
  };

  const formLayout = () => {
    if (isMobile || isResponsive) {
      return 'Horizontal';
    }
    return 'inline';
  };
  return (
    <>
      <div className="PublicFaq_search_container">
        <div className="PublicFaq_search_container_inner">
          <div className="PublicFaq_search_bar_container">
            <div className="PublicFaq_search_bar_container_inner">
              <Form
                layout={formLayout()}
                onFinish={leadToSearchedResult}
              >
                <Form.Item
                  name="userSearchResult"
                >
                  <Input
                    size="large"
                    style={{
                      width: isMobile ? '279px' : '550px',
                      height: '55px',
                      borderRadius: '8px',
                      marginLeft: isMobile ? '25px' : '0px',
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    style={{
                      width: isMobile ? '278px' : '205px',
                      height: '55px',
                      backgroundImage: 'linear-gradient(90deg, #1783e7 0%, #00abff 100%)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginLeft: isMobile ? '25px' : '0px',
                    }}
                    htmlType="submit"
                  >
                    <SearchOutlined size="lg" />
                    Search
                  </Button>
                </Form.Item>
              </Form>
              {noResult
                && (
                <div className="search_error_container">
                  <p className="error_message">
                    We couldn&apos;t find any matches for &quot;
                    {requestedResult}
                    &quot;
                  </p>
                </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
