import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRemoteDataSet, GlobalActions } from '../../../reducers';
import { useResize, getImg } from '../../../utils/helpers';
import { Trans as T } from "react-i18next";
import { Accordion } from './Accordion';
import { Dropdown } from './Dropdown';
import './Header.css';
import { SelectCoin } from './SelectCoin';

const menus = [
    {
        'title': <T>menu.products.title</T>,
        'subMenus': [
            { 'title': <T>menu.products.submenu.0</T>, 'icon': 'navbar/wallet.svg', 'link': '/wallet' },
            { 'title': <T>menu.products.submenu.1</T>, 'icon': 'navbar/card.svg', 'link': '/cards' },
            { 'title': <T>menu.products.submenu.2</T>, 'icon': 'navbar/transfers.svg', 'link': '/transfers' },
        ],
        'alignLeft': false,
    },
    {
        'title': <T>menu.company.title</T>,
        'subMenus': [
            { 'title': <T>menu.company.submenu.0</T>, 'icon': 'navbar/about.svg', 'link': '/about' },
            { 'title': <T>menu.company.submenu.1</T>, 'icon': 'navbar/careers.svg', 'link': '/careers' },
            { 'title': <T>menu.company.submenu.2</T>, 'icon': 'navbar/blog.svg', 'link': '/blog' },
            { 'title': <T>menu.company.submenu.5</T>, 'icon': 'navbar/privacy.svg', 'link': '/privacy/notice' },
            { 'title': <T>menu.company.submenu.6</T>, 'icon': 'navbar/contact_us.svg', 'link': '/contact' },
            // { 'title': <T>menu.company.submenu.3</T>, 'icon': 'navbar/cardholder_agreement.svg', 'link': `${process.env.REACT_APP_STORAGE || ""}pdf/cardholder-agreement.pdf` },
            // { 'title': <T>menu.company.submenu.4</T>, 'icon': 'navbar/legal.svg', 'link': '/legal/term' },
        ],
        'alignLeft': true,
    }
]

export const IndexHeader = () => {
    const header = useRef(null);
    const location = useLocation();
    const pathName = location.pathname;
    const [isActive, setActive] = useState(false);
    const [burger, setburger] = useState(false);
    const [logoImg, setLogoImg] = useState(getImg('navbar/logo.svg'));
    const [color, setColor] = useState('var(--textBlue)');
    const [menuColor, setMenuColor] = useState('white');
    const [isDark, setIsDark] = useState(true);
    const { isResponsive, isMobile } = useResize();

    const pathNames = [
        '/cards',
        '/contact',
        '/transfers',
        '/affiliate',
        '/calculator',
        '/community',
        '/blog',
        '/crypto-basic',
        '/crypto-advanced',
        '/anonymous',
      ]


useEffect(() => {
    if (pathNames.includes(pathName)) {
        setLogoImg(getImg('navbar/logo-white.svg'))
        setColor('white')
        setMenuColor('white')
        setIsDark(false)
        document.documentElement.style.setProperty('--priceColor', 'white');
    } else {
        setLogoImg(getImg('navbar/blue-logo.svg'))
        setColor('var(--darkBlue)')
        setMenuColor('var(--darkBlue)')
        setIsDark(true)
        document.documentElement.style.setProperty('--priceColor', 'var(--textBlue)');
    }
    if (pathName === '/') {
        setMenuColor('white')
    }

    window.scrollTo(0, 0);
}, [pathName])

const toggleClass = () => {
    setActive(!isActive);
};

const toggleBurger = () => {
    setburger(!burger);
};

    // redux part for coinbase api
    const [coinMap, setCoinMap] = useState({});
    const dispatch = useDispatch();

    const createMap = (dataSet) => {
        if (Array.isArray(dataSet)) {
            let set = {};
            dataSet.forEach(d => {
                if (d.base) {
                    set[d.base.toUpperCase()] = d;
                }
            });
            setCoinMap(set);
        }
    };

    useEffect(() => {
        getRemoteDataSet()
            .then(dataSet => {
                createMap(dataSet);
                dispatch(GlobalActions.setDataSet(dataSet));
            });
        const interval = setInterval(() => {
            getRemoteDataSet()
                .then(dataSet => {
                    createMap(dataSet);
                    dispatch(GlobalActions.setDataSet(dataSet));
                });
        }, 60000);
        return () => clearInterval(interval);
    }, []);


    return (
        <header className="header" ref={header}>
            <div className={burger ? "shadow_active" : "shadow"} onClick={toggleBurger}></div>
              <div className="header-container-fluid">
                <div className="header_inner">
                    <Link to="/" className="logo">
                        <img src={logoImg} alt="logo" />
                    </Link>
                    <div className="lang" style={{ color: color }}>
                        <li onClick={toggleClass}>
                            <img src={getImg('navbar/lang.svg')} alt="" />
                            <T>menu.flag.0</T>
                        </li>
                    </div>
                    <div className="btc" style={{ color: color, fontSize: '18px', fontWeight: '700' }}>
                        <SelectCoin coinMap={coinMap}/>
                    </div>
                    <nav className={burger ? "nav_active" : "nav"}>
                        {isMobile && <img onClick={toggleBurger} alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTE0LjcgMS4zYy0uNC0uNC0xLS40LTEuNCAwTDggNi42IDIuNyAxLjNjLS40LS40LTEtLjQtMS40IDBzLS40IDEgMCAxLjRMNi42IDhsLTUuMyA1LjNjLS40LjQtLjQgMSAwIDEuNC4yLjIuNC4zLjcuM3MuNS0uMS43LS4zTDggOS40bDUuMyA1LjNjLjIuMi41LjMuNy4zcy41LS4xLjctLjNjLjQtLjQuNC0xIDAtMS40TDkuNCA4bDUuMy01LjNjLjQtLjQuNC0xIDAtMS40eiIgZmlsbD0iIzU2NWQ2ZCIvPjwvc3ZnPg==" />}
                        {!isResponsive && menus.map((menu, index) => (
                            <Dropdown menu={menu} key={index} color={menuColor} />
                        ))}
                        {isResponsive && menus.map((menu, index) => (
                            <Accordion menu={menu} key={index} toggleHandler={toggleBurger}/>
                        ))}
                        <div className='header_menu'>
                        <li style={!isResponsive ? {} : {padding: "18px"}}>
                            <a href={`${process.env.REACT_APP_URL}login`}
                               style={!isResponsive ? {color: menuColor, lineHeight:"24px"} : {color: "var(--darkBlue)"}}><T>menu.login</T></a>
                        </li>
                        </div>
                            <a href={`${process.env.REACT_APP_URL}signup`}
                               className={`btn active header_btn`}><T>menu.getStarted</T></a>

                    </nav>
                    <span className="nav_toggle" onClick={toggleBurger}>
                        <span className={`nav_toggle-item ${isDark ? 'dark' : ''}`}></span>
                    </span>
                </div>
              </div>
        </header>
    )
}

export { IndexHeader as default } from './index'
