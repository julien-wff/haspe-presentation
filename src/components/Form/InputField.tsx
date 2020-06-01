import classNames from 'classnames';
import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import addLanguagePack from '../../locales/add-language-pack';
import styles from './InputField.module.scss';
import { useTranslation } from 'react-i18next';

import translations from '../../locales/input-field.json';

addLanguagePack(translations);

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => any;
}

type ErrorType = 'wrong email' | false;

function InputField(props: Props) {
    const [inputValue, setInputValue] = useState((props.value || '') as string);
    const [errorMsg, setErrorMsg] = useState<ErrorType>(false);
    const [uuid] = useState(Math.random().toString().slice(2, 7));
    const { t } = useTranslation();

    let id = props.id || `${props.type}-${uuid}`,
        name = props.name || props.type,
        classes = classNames(styles.input, props.className),
        type = props.type || 'text',
        pattern =
            props.pattern ||
            (props.type === 'email' ? emailRegex.toString() : undefined);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setInputValue(value);
        props.onChange(event);
    }

    function handleErrorChecking() {
        if (type === 'email' && inputValue && !inputValue.match(emailRegex))
            setErrorMsg('wrong email');
        else setErrorMsg(false);
    }

    return (
        <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor={id}>
                {props.label}
            </label>
            <input
                name={name}
                value={inputValue}
                id={id}
                className={classes}
                pattern={pattern}
                {...props}
                onChange={handleChange}
                onBlur={handleErrorChecking}
            />
            {errorMsg && <span className={styles.errorMsg}>{t(errorMsg)}</span>}
        </div>
    );
}

export default InputField;
