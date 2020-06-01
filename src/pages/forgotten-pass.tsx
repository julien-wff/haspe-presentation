import React from 'react';
import '../styles/body.scss';
import { navigate } from '@reach/router';
import Center from '../components/Center';
import SEO from '../components/SEO';

function ForgottenPassPage() {
    async function handleBackClick() {
        await navigate(-1);
    }

    return (
        <>
            <SEO title="Forgotten password" />

            <Center withoutNav noSpacing flexDirection="column">
                <h1>Forgotten password</h1>
                <p onClick={handleBackClick} style={{ cursor: 'pointer' }}>
                    Go back
                </p>
            </Center>
        </>
    );
}

export default ForgottenPassPage;
