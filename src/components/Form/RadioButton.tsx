import React, { InputHTMLAttributes, useState } from 'react';
import styles from './RadioButton.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name?: string;
    checked?: boolean;
    id?: string;
    //onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
}

function RadioButton(props: Props) {
    // const [ inputValue, setInputValue ] = useState(props.value || '');
    const [ uuid ] = useState(Math.random().toString().slice(2, 7));

    let id = props.id || `radio-${uuid}`,
        name = props.name;

    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //     const { value } = event.target;
    //     setInputValue(value);
    //     props.onChange(event);
    // }

    return (
        <>
            <div className={styles.container}>
                <input
                    name={name}
                    id={id}
                    className={styles.inputRadio}
                    value={props.label}
                    type="radio"
                />
                <label className={styles.label} htmlFor={id}>
                    {props.label}
                </label>
            </div>
        </>
    );
}

export default RadioButton;

// <label className="container">One
//     <input type="radio" checked="checked" name="radio">
//         <span className="checkmark"></span>
// </label>
