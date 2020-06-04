import React, { ReactNode } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

interface Props {
    children: ReactNode;
    withoutNav?: boolean;
    noSpacing?: boolean;
    flexDirection?: 'row' | 'column';
    id?: string;
}

function Center({ children, withoutNav = false, noSpacing = false, flexDirection = 'row', id }: Props) {

    const verticalClasses = classNames(
        styles.verticalAlign,
        {
            [styles.withNav]: !withoutNav,
        },
    );
    const horizontalClasses = classNames('' +
        styles.horizontalAlign,
        {
            [styles.spacing]: !noSpacing,
            [styles.flexColumn]: flexDirection === 'column',
        },
    );

    return (
        <div className={verticalClasses}>
            <div className={horizontalClasses} id={id}>
                {children}
            </div>
        </div>
    );
}

export default Center;
