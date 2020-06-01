import React from 'react';
import { Helmet } from 'react-helmet';
import { usePageContext } from './PageContext';

interface SEOProps {
    title?: string;
    description?: string;
}

function SEO({ title = 'Haspe', description = 'Haspe' }: SEOProps) {
    const { lang } = usePageContext();

    return (
        <Helmet>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}

export default SEO;
