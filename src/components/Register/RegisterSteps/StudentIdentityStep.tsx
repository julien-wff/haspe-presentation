import React, { ChangeEvent } from 'react';
import './StudentIdentityStep.scss';
import InputField from '../../Form/InputField';
import { useTranslation } from 'react-i18next';
import { StepProps, StudentDataKeys, StudentIdentityData } from './Step';
import i18next from 'i18next';
import enRegisterStudent from '../../../locales/en/register/register-student.json';
import frRegisterStudent from '../../../locales/fr/register/register-student.json';

// Load languages
i18next.addResourceBundle('fr', 'translation', frRegisterStudent);
i18next.addResourceBundle('en', 'translation', enRegisterStudent);

export default function StudentIdentityStep({
    changeValue,
    writeChanges,
    values,
}: StepProps<StudentIdentityData, StudentDataKeys>) {
    const { t } = useTranslation();

    function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
        const { value, attributes } = evt.target;
        const key = attributes.getNamedItem('name')?.value!;
        changeValue('identity', key, value);
    }

    return (
        <>
            <h1>{t('who are you')}</h1>
            <div id="student-identity-inputs">
                <InputField
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    label={t('name')}
                    onChange={handleInputChange}
                    onBlur={writeChanges}
                    required
                    autoFocus
                />
                <InputField
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    label={t('first name')}
                    onChange={handleInputChange}
                    onBlur={writeChanges}
                    required
                />
                <InputField
                    type="date"
                    name="birthDate"
                    value={values.birthDate}
                    label={t('birth date')}
                    onChange={handleInputChange}
                    onBlur={writeChanges}
                    required
                />
                <InputField
                    type="text"
                    name="country"
                    value={values.country}
                    label={t('country')}
                    onChange={handleInputChange}
                    onBlur={writeChanges}
                    required
                />
                <InputField
                    type="text"
                    name="city"
                    value={values.city}
                    label={t('city')}
                    onChange={handleInputChange}
                    onBlur={writeChanges}
                    required
                />
                <InputField
                    type="text"
                    name="institution"
                    value={values.institution}
                    label={t('institution')}
                    onChange={handleInputChange}
                    onBlur={writeChanges}
                    required
                />
            </div>
        </>
    );
}
