import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

import './NavText.scss';

interface Props {
    text: string;
    icon?: IconDefinition;
    options?:
        | {
              type: 'link';
              url: string;
              linkType: 'router' | 'anchor';
          }
        | {
              type: 'menu';
          };
    float?: 'right' | 'left';
    pcOnly?: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

//TODO: pcOnly

function NavText({ text, icon, options, float = 'right', onClick }: Props) {
    const cssClasses = classNames(['nav-text', `float-${float}`]);

    let linkContent = (
        <>
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
        </>
    );

    if (options && options.type === 'link') {
        if (options.linkType === 'anchor') {
            linkContent = <a href={options.url}>{linkContent}</a>;
        } else {
            linkContent = <Link to={options.url}>{linkContent}</Link>;
        }
    } else {
        linkContent = <div className="nav-menu">{linkContent}</div>;
    }

    return (
        <div className={cssClasses} onClick={onClick}>
            {linkContent}
        </div>
    );
}

export default NavText;
