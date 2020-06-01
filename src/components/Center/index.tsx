import React, { ReactNode } from 'react';
import './index.scss';
import classNames from 'classnames';

interface Props {
    children: ReactNode;
    withoutNav?: boolean;
    noSpacing?: boolean;
    flexDirection?: 'row' | 'column';
    id?: string;
}

function Center({
    children,
    withoutNav = false,
    noSpacing = false,
    flexDirection = 'row',
    id,
}: Props) {
    const verticalClasses = classNames('vertical-align', {
        'with-nav': !withoutNav,
    });
    const horizontalClasses = classNames('horizontal-align', {
        spacing: !noSpacing,
        'flex-column': flexDirection === 'column',
    });

    return (
        <div className={verticalClasses}>
            <div className={horizontalClasses} id={id}>
                {children}
            </div>
        </div>
    );
}

export default Center;
