import React, { useState } from 'react';
import {
  Button,
  Carousel,
  Col,
  Collapse,
  Divider,
  Image,
  List,
  Radio,
  Row,
  Space,
  Typography,
} from 'antd';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import { Trans as T } from 'react-i18next';
import { cssStyles, isMobile } from '../../utils/helpers';

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const lists = {
  1: [
    {
      title: 'ATM Withdrawal',
      text: '$2,000 per withdrawal'
    },
    {
      title: 'Load Limits',
      text: '$10,000 per day'
    },
    {
      title: 'Spending Limits',
      text: '$10,000 per day'
    },
    {
      title: 'Maximum Balance',
      text: '$25,000 including cash loans'
    },
  ],
  2: [
    {
      title: 'Card Issue',
      text: '$10.00'
    },
    {
      title: 'ATM Fee',
      text: '$2.5'
    },
    {
      title: 'Monthly Fee',
      text: '$0.00 '
    },
    {
      title: 'Card Load',
      text: '$1,000 including cash loans'
    },
    {
      title: 'Card Replacement',
      text: '$10.00'
    },
    {
      title: 'International Currency Conversion',
      text: '3 %'
    },
    {
      title: 'Inactivity Fee',
      text: ' $5.00 per month after 90 days with no transactions',
    },
  ],
};

const options = [
  {
    label: 'Limits',
    value: 1
  },
  {
    label: 'Fees',
    value: 2
  },
];

const styles = {
  text: {
    textAlign: 'center',
    marginBottom: '1%'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  caruselButtons: {
    padding: '1%',
    marginBottom: '3%'
  },
  caruselIcon: {
    fontSize: '22px',
    position: 'relative',
    top: '-0.2em'
  },
  bottom: {},
  divStyle: {
    textAlign: 'center',
    marginBottom: '2em'
  }
};

export const AllCards = () => {
  const [radio, setRadio] = useState('');
  const [list, setList] = useState(lists[1]);
  const gutter = isMobile() ? [5, 5] : [48, 48];

  const radioOnChange = (e) => {
    setList(lists[e.target.value]);
    setRadio(e.target.value);
  };
  
  const getImages = (counter) => {
    const height = isMobile() ? 140 : 195,
      width = isMobile() ? 140 : 195;
    let image1,
      image2,
      image3;
    if (counter === 1) {
      image1 = 'cardsIcons/darktilted.png';
      image2 = 'cardsIcons/bluetilted.png';
      image3 = 'cardsIcons/blacktilted.png';
    } else if (counter === 2) {
      image1 = 'cardsIcons/bluetilted.png';
      image2 = 'cardsIcons/blacktilted.png';
      image3 = 'cardsIcons/darktilted.png';
    } else {
      image1 = 'cardsIcons/blacktilted.png';
      image2 = 'cardsIcons/darktilted.png';
      image3 = 'cardsIcons/bluetilted.png';
    }
    return (<Space direction="horizontal">
      <Image
        preview={false}
        height={height}
        width={width}
        src={`${
          process.env.REACT_APP_STORAGE || ''
        }${image1}`}
        alt={`${image1}`}
      />
      <Image
        preview={false}
        height={height}
        width={width}
        src={`${
          process.env.REACT_APP_STORAGE || ''
        }${image2}`}
        alt={`${image2}`}
      />
      <Image
        preview={false}
        height={height}
        width={width}
        src={`${
          process.env.REACT_APP_STORAGE || ''
        }${image3}`}
        alt={`${image3}`}
      />
    </Space>);
  };
  return (
    <div style={{ width: '99%' }}>
      <Title style={{
        textAlign: 'center',
        marginBottom: '1%',
        fontSize: cssStyles.h1.fontSize
      }}>
        <T>allCards.title</T>
      </Title>
      <Paragraph style={{
        textAlign: 'center',
        fontSize: cssStyles.h3.fontSize
      }}>
        <T>allCards.subtitle</T>
      </Paragraph>
      <Title style={{
        textAlign: 'center',
        marginBottom: '1%',
        fontSize: cssStyles.h2.fontSize
      }}>
        <T>allCards.carucel.title</T>
      </Title>

      {/*<div style={{*/}
      {/*  textAlign: 'center',*/}
      {/*  marginBottom: '1.2em'*/}
      {/*}}>*/}
      {/*  <Space direction={isMobile() ? 'vertical' : 'horizontal'}>*/}
      {/*    <div style={{ paddingRight: '1em' }}>*/}
      {/*      <Title level={3}>*/}
      {/*        <CheckCircleOutlined style={styles.caruselIcon}/>*/}
      {/*        <T>allCards.carucel.advantages.0</T>*/}
      {/*      </Title>*/}
      {/*    </div>*/}
      {/*    <div style={{ paddingRight: '1em' }}>*/}
      {/*      <Title level={3} style={{ paddingRight: '1em' }}>*/}
      {/*        <CheckCircleOutlined style={styles.caruselIcon}/>*/}
      {/*        <T>allCards.carucel.advantages.0</T>*/}
      {/*      </Title>*/}
      {/*    </div>*/}
      {/*    <div style={{ paddingRight: '1em' }}>*/}
      {/*      <Title level={3} >*/}
      {/*        <CheckCircleOutlined style={styles.caruselIcon}/>*/}
      {/*        <T>allCards.carucel.advantages.0</T>*/}
      {/*      </Title>*/}
      {/*    </div>*/}
      {/*  </Space>*/}
      {/*</div>*/}

      <Row justify="center" align="middle" gutter={gutter}>
        <Col>
          <Space align="center">
            <CheckCircleOutlined style={styles.caruselIcon}/>
            <Title level={3}>
              <T>allCards.carucel.advantages.0</T>
            </Title>
          </Space>
        </Col>
        <Col>
          <Space>
            <CheckCircleOutlined style={styles.caruselIcon}/>
            <Title level={3}>
              <T>allCards.carucel.advantages.0</T>
            </Title>
          </Space>
        </Col>
        <Col>
          <Space>
            <CheckCircleOutlined style={styles.caruselIcon}/>
            <Title level={3}>
              <T>allCards.carucel.advantages.0</T>
            </Title>
          </Space>
        </Col>
      </Row>

      <div style={styles.divStyle}>
        <Button type="primary" size="large" style={{ marginRight: isMobile() ? '1em' : '4em' }}>
          <T>allCards.carucel.buttons.0</T>
        </Button>
        <Button type="primary" size="large">
          <T>allCards.carucel.buttons.1</T>
        </Button>
      </div>

      <div style={styles.divStyle}>
        <Space align="center">
          <Carousel dots={false} style={{
            width: isMobile() ? '32em' : '44em'
          }} autoplay>
            <div>
              {getImages(1)}
            </div>
            <div>
              {getImages(2)}
            </div>
            <div>
              {getImages(3)}
            </div>
          </Carousel>
        </Space>
      </div>
      <div style={{
        ...styles.divStyle,
        display: 'block'
      }}>
        <Title style={{
          marginBottom: '2%',
          fontSize: '3rem'
        }}>
          <T>allCards.care.title</T>
        </Title>
        <Title style={{
          ...styles.text,
          padding: '1.5em'
        }} level={3}>
          <T>allCards.care.subtitle</T>
        </Title>
      </div>
      {/*<Row gutter={gutter} justify="center" align="middle" style={{ marginTop: '3%' }}>*/}
      {/*  <Col xs={{ span: 24 }}*/}
      {/*       lg={{*/}
      {/*         span: 12,*/}
      {/*         offset: 2*/}
      {/*       }}>*/}

      {/*  </Col>*/}
      {/*</Row>*/}


      <Row justify="center" align="middle" gutter={[16, 16]} style={styles.caruselButtons}>
        <Col
          xs={{ span: 24 }}
          md={{
            span: 3,
            offset: 1
          }}>
          <Space direction="vertical" width='20%'>
            <Row justify="center">
              <Image
                style={{ marginTop: '1em' }}
                width="200px"
                height="200px"
                preview={false}
                src={`${process.env.REACT_APP_STORAGE || ''}cardsIcons/billwallet.svg`}
                alt={'billwallet'}
              />
            </Row>
            <Title level={3} style={styles.text}>
              <T>allCards.care.icons.title.0</T>
            </Title>
            <Paragraph level={1} style={styles.text}>
              <T>allCards.care.icons.description.0</T>
            </Paragraph>
          </Space>
          <Space direction="vertical" width='20%'>
            <Row justify="center">
              <Image
                style={{ marginTop: '1em' }}
                width="200px"
                height="200px"
                preview={false}
                src={`${process.env.REACT_APP_STORAGE || ''}cardsIcons/receipt.svg`}
                alt={'receipt'}
              />
            </Row>
            <Title level={3} style={styles.text}>
              <T>allCards.care.icons.title.1</T>
            </Title>
            <Paragraph level={1} style={styles.text}>
              <T>allCards.care.icons.description.1</T>
            </Paragraph>
          </Space>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{
            span: 3,
            offset: 1
          }}
        >
          <Space direction="vertical" width='20%'>
            <Row justify="center">
              <Image
                style={{ marginTop: '1em' }}
                width="200px"
                height="200px"
                preview={false}
                src={`${process.env.REACT_APP_STORAGE || ''}cardsIcons/safeshield.svg`}
                alt={'safeshield'}
              />
            </Row>
            <Title level={3} style={styles.text}>
              <T>allCards.care.icons.title.2</T>
            </Title>
            <Paragraph level={1} style={styles.text}>
              <T>allCards.care.icons.description.2</T>
            </Paragraph>
          </Space>
          <Space direction="vertical">
            <Row justify="center">
              <Image
                style={{ marginTop: '1em' }}
                width="200px"
                height="200px"
                preview={false}
                src={`${process.env.REACT_APP_STORAGE || ''}cardsIcons/globe.svg`}
                alt={'globe'}
              />
            </Row>
            <Title level={3} style={styles.text}>
              <T>allCards.care.icons.title.3</T>
            </Title>
            <Paragraph level={1} style={styles.text}>
              <T>allCards.care.icons.description.3</T>
            </Paragraph>
          </Space>
        </Col>

        <Col
          xs={{ span: 24 }}
          lg={{
            span: 3,
            offset: 1
          }}>
          <Space direction="vertical" width='20%'>
            <Row justify="center">
              <Image
                style={{ marginTop: '1em' }}
                width="200px"
                height="200px"
                preview={false}
                src={`${process.env.REACT_APP_STORAGE || ''}cardsIcons/phoneshield.svg`}
                alt={'phoneshield'}
              />
            </Row>
            <Title level={3} style={styles.text}>
              <T>allCards.care.icons.title.4</T>
            </Title>
            <Paragraph level={1} style={styles.text}>
              <T>allCards.care.icons.description.4</T>
            </Paragraph>
          </Space>
          <Space direction="vertical">
            <Row justify="center">
              <Image
                style={{ marginTop: '1em' }}
                width="200px"
                height="200px"
                preview={false}
                src={`${process.env.REACT_APP_STORAGE || ''}cardsIcons/target.svg`}
                alt={'target'}
              />
            </Row>
            <Title level={3} style={styles.text}>
              <T>allCards.care.icons.title.5</T>
            </Title>
            <Paragraph level={1} style={styles.text}>
              <T>allCards.care.icons.description.5</T>
            </Paragraph>
          </Space>
        </Col>
      </Row>

      <Row gutter={gutter} justify="center" style={{ margin: '5%' }}>
        <Title level={3}>
          <T>allCards.cards.title</T>
        </Title>
      </Row>

      <Row gutter={gutter} justify="center" align="middle">
        <Col
          xs={{ span: 24 }}
          lg={{
            span: 4,
            offset: 1
          }}
        >
          <Image
            preview={false}
            src={`${
              process.env.REACT_APP_STORAGE || ''
            }final_credit_cards/whitecard.png`}
            alt={'whitecard'}
          />
          <h3 style={styles.text}>PlasBit Anonymous</h3>
          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </List.Item>
            )}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 4 }}
        >
          <Image
            preview={false}
            src={`${
              process.env.REACT_APP_STORAGE|| ''
            }final_credit_cards/bluecard.png`}
            alt={'bluecard'}
          />
          <h3 style={styles.text}>PlasBit Plastic</h3>

          <List
            itemLayout="horizontal"
            style={{ width: '95%' }}
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </List.Item>
            )}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <Image
            preview={false}
            src={`${
              process.env.REACT_APP_STORAGE || ''
            }final_credit_cards/blackcard.png`}
            alt={'blackcard'}
          />
          <h3 style={styles.text}>PlasBit Black</h3>

          <List
            itemLayout="horizontal"
            style={{ width: '95%' }}
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row gutter={gutter} justify="center">
        <Radio.Group
          options={options}
          onChange={radioOnChange}
          value={radio}
          optionType="button"
        />
      </Row>

      <Row gutter={gutter}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{
            span: 18,
            offset: 3
          }}
          lg={{
            span: 18,
            offset: 3
          }}
        >
          <Divider></Divider>
          <Title level={3}>
            <T>allCards.about.title.0</T>
          </Title>
          <Title level={3}>
            <T>allCards.about.title.1</T>
          </Title>

          <Collapse style={{ width: '95%' }}>
            <Panel
              header={
                <Title level={5}>
                  <T>allCards.about.questions.0</T>
                </Title>
              }
              key="1"
            >
              <Paragraph level={1}>
                <T>allCards.about.answers.0</T>
              </Paragraph>
            </Panel>
            <Panel
              header={
                <Title level={5}>
                  <T>allCards.about.questions.1</T>
                </Title>
              }
              key="2"
            >
              <Paragraph level={1}>
                <T>allCards.about.answers.1</T>
              </Paragraph>
            </Panel>
            <Panel
              header={
                <Title level={5}>
                  <T>allCards.about.questions.2</T>
                </Title>
              }
              key="3"
            >
              <Paragraph level={1}>
                <T>allCards.about.answers.2</T>
              </Paragraph>
            </Panel>
            <Panel
              header={
                <Title level={5}>
                  <T>allCards.about.questions.3</T>
                </Title>
              }
              key="4"
            >
              <Paragraph level={1}>
                <T>allCards.about.answers.3</T>
              </Paragraph>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <Row gutter={gutter}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{
            span: 18,
            offset: 3
          }}
          lg={{
            span: 18,
            offset: 3
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: '#303c94',
            padding: '3%',
            marginTop: '5%'
          }}>
            <Title level={1} style={{ color: 'white' }}> <T>allCards.order.title</T></Title>
            <Button type="primary"> <T>allCards.order.title</T></Button>

          </div>
        </Col>
      </Row>

    </div>
  );
};

export { AllCards as default } from './AllCards'

