import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { PageContextProvider } from './src/components/PageContext';
import i18n from './src/locales/i18next';


/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapRootElement = ({ element }) => {
    return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>;
};


/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
    return <PageContextProvider value={props.pageContext}>{element}</PageContextProvider>;
};