import React from 'react'
import { Link } from "react-router-dom";
import './Article.css'
import { filterDate } from '../../../utils/helpers';

export const Article = (props) => {
    return (
        <article className={`blog_article ${props.sort}`}>
            <Link to={`${props.pathName}/${props.page.route}`} className="post_card_image_link">
                <img className="post_card_image" src={props.page.mainimage} alt={props.page.headline} />
            </Link>
            <div className="post_card_content">
                <Link to={`${props.pathName}/${props.page.route}`} className="post_card_content_link">
                    <header className="post_card_header">
                        <h2 className="post_card_title">{props.page.headline}</h2>
                    </header>
                    <section className="post_card_excerpt">
                        <p>{props.page.subline}</p>
                    </section>
                </Link>
                <footer className="post_card_meta">
                    <ul className="author_list">
                        <li className="author_list_item">
                            <div className="static_avatar">
                                <img className="author_profile_image" src={props.page.subImage} alt="The PlasBit Team" />
                            </div>
                        </li>
                    </ul>
                    <span className="reading_time">{filterDate(props.page.dateCreated)}</span>
                </footer>
            </div>
        </article>
    )
}