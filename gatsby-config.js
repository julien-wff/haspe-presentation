const manifest = require('./config/manifest');

module.exports = {
    siteMetadata: {
        title: 'Haspe',
        description: '',
        author: 'Julien W, Lilian W',
        themeColor: '#ffab00',
        siteUrl: 'http://localhost/',
        supportedLanguages: ['en', 'fr'],
        defaultLanguage: 'en'
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-netlify',
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: manifest
        }
    ]
};
