import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PageContext = createContext<PageContext>({
    lang: 'en',
    originalPath: '/',
});

interface PageContextProviderProps {
    value: PageContext;
    children: JSX.Element | JSX.Element[];
}

interface PageContext {
    lang: string;
    originalPath: string;
}

export const PageContextProvider = ({
    value: pageContext,
    children,
}: PageContextProviderProps) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(pageContext.lang).catch(err =>
            console.error('Error when changing language', err),
        );
    }, []);

    return (
        <PageContext.Provider value={pageContext}>
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => useContext<PageContext>(PageContext);
