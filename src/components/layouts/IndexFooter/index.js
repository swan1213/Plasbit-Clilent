import React from 'react';
import { Link } from 'react-router-dom';
import { useResize, getImg } from '../../../utils/helpers';
import { Trans as T } from 'react-i18next';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';
import './Footer.css';
import { AccordionFooter } from './AccordionFooter';

const menus = [
  {
    title: <T>menu.products.title</T>,
    subMenus: [
      { title: <T>menu.products.submenu.0</T>, link: '/wallet' },
      { title: <T>menu.products.submenu.1</T>, link: '/cards' },
      { title: <T>menu.products.submenu.2</T>, link: '/transfers' },
    ],
  },
  {
    title: <T>menu.company.title</T>,
    subMenus: [
      { title: <T>menu.company.submenu.0</T>, link: '/about' },
      { title: <T>menu.company.submenu.1</T>, link: '/careers' },
      { title: <T>menu.company.submenu.2</T>, link: '/blog' },
      { title: <T>menu.company.submenu.7</T>, link: '/community' },
      { title: <T>menu.company.submenu.3</T>, link: '/security' },
      { title: <T>menu.company.submenu.4</T>, link: '/legal/term' },
      { title: <T>menu.company.submenu.5</T>, link: '/privacy/notice' },
      { title: <T>menu.company.submenu.6</T>, link: '/contact' },
    ],
  },
  {
    title: <T>menu.Learn.title</T>,
    subMenus: [
      { title: <T>menu.Learn.submenu.0</T>, link: '/crypto-basic' },
      { title: <T>menu.Learn.submenu.1</T>, link: '/crypto-advanced' },
      { title: <T>menu.Learn.submenu.2</T>, link: '/anonymous' },
    ],
  },
  {
    title: <T>menu.Resources.title</T>,
    subMenus: [
      { title: <T>menu.Resources.submenu.0</T>, link: '/prices' },
      { title: <T>menu.Resources.submenu.1</T>, link: '/widgets' },
      { title: <T>menu.Resources.submenu.2</T>, link: '/public-faq' },
    ],
  },
];

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export const IndexFooter = () => {
  const { isMobile } = useResize();

  const socialIcons = (className) => {
    return (
      <>
        <div className={className}>
          <a className="telegramIcon" href="https://telegram.me/Plasbit_Community" target="_blank" rel="noreferrer">
            <img src={getImg('navbar/telegram.png')} alt="telegram" />
          </a>
          <a href="https://twitter.com/plasbit" target="_blank" rel="noreferrer">
            <TwitterOutlined alt="twitter" />
          </a>
        </div>
      </>
    );
  };

    return (

        <footer className="footer">
            <div className="footer_content_inner">
                <div className="footer_content">
                    <div className={isMobile ? "footer_top_mobile" : "footer_top"}>
                        <Link to="/"><img src={getImg('navbar/logo-footer.svg')} alt="logo" /></Link>
                        {isMobile && socialIcons("footer_social_mobile")}
                    </div>
                    {!isMobile && menus.map((menu, index) => (
                        <div className="footer_item" key={index}>
                            <h3 className="footer_title">
                                {menu.title}
                            </h3>
                            <nav>
                                <ul>
                                    {menu.subMenus.map((subMenu, index) => {
                                        if (subMenu.link.includes('cardholder')) {
                                            return (
                                                <li key={index}>
                                                    <a href={subMenu.link} target="_blank" rel="noreferrer">
                                                        {subMenu.title}
                                                    </a>
                                                </li>
                                            )
                                        }else {
                                            return (
                                                <li key={index}>
                                                    <Link to={subMenu.link} >
                                                        {subMenu.title}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </nav>
                        </div>
                    ))}
                    {isMobile && menus.map((menu, index) => (
                        <AccordionFooter menu={menu} key={index} />
                    ))}
                    {!isMobile && socialIcons("footer_social")}
                </div>
           </div>
            <div className="policy">
                <T>policy.text.0</T>
                <br />
                <T>policy.text.1</T>
                ( <Link to="/privacy/eu"><T>policy.eu</T></Link> | <Link to="/privacy/notice"><T>policy.noneu</T></Link> ) | <T>policy.text.2</T>
                ( <Link to="/privacy/eu"><T>policy.eu</T></Link> | <Link to="/privacy/notice"><T>policy.noneu</T></Link> )
                <br />
                <span>{`© Copyright 2020 - ${getCurrentYear()} PlasBit LTD - All Rights Reserved.`}</span>
            </div>
    </footer>

    )

}

export { IndexFooter as default } from './index'