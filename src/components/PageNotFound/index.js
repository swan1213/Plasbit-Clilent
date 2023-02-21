import React from 'react';
import { getImg, siteTitles } from '../../utils/helpers';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { CustomHelmet } from '../CustomHelmet/CustomHelmet';
import './index.css'


export const PageNotFound = () => {
    return (
        <>
            <CustomHelmet title={siteTitles.pageNotFound} />
            <div className="App">
                <div className='container-404-'>
                    <div className='inner-404-container'>
                        <div className='image-404-container'>
                            <div className='inner-404-image-container'>
                                <Image 
                                width={400}
                                height={400}
                                className="inner-404-img"
                                src={getImg('errorPage/error404.png')}
                                preview={false}
                                alt={`error404`}/>
                            </div>
                        </div>
                        <div className='404-text-container'>
                            <div className='inner-404-text-container'>
                                <h1 className='title-404 main_title'>
                                    404 - Page not found
                                </h1>
                                <p className='404-title-child text'>
                                    The page you are looking for might have been removed or is temporarily unavailable
                                </p>
                            </div>
                        </div>
                        <div className='404-btn-container'>
                            <div className='inner-404-btn-container'>
                                <Link to={'/'} className="btn active">Back home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { PageNotFound as default } from './index'