import React from 'react';
import { navigate } from '@reach/router';
import Center from '../components/Center';

import styles from './404.module.scss';

export default function page404() {
    return (
        <Center withoutNav noSpacing flexDirection="column">
            <h1 className={styles.header}>404 not found</h1>
            <span className={styles.link} onClick={() => navigate(-1)}>
                Go back
            </span>
        </Center>
    );
}
