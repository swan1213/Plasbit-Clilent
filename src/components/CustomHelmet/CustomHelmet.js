import React from "react";
import { Helmet } from "react-helmet-async";

export const CustomHelmet = ({title, description, canonical, keywords}) => {
    return (
        <Helmet prioritizeSeoTags>
            <title>{title}</title>
            {description && <meta name='description' content={description} />}
            {canonical && <link rel='canonical' href={canonical}/>}
            {keywords && <meta name="keywords" content={keywords}/>}
        </Helmet>
    );
};
