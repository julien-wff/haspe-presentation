import React, { FormEvent, useContext } from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { navigate } from '@reach/router';
import { StudentRegisterContext } from '../../../pages/register/student';
import Center from '../../Center';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StepIndicator from './StepIndicator';

interface Props {
    children: JSX.Element | JSX.Element[];
    pageName: string;
}

export default function RegisterSteps({ children: steps }: Props) {

    const { userData: { step: stepIndex }, dispatchUserData } = useContext(StudentRegisterContext);
    const { t } = useTranslation();

    // If only one step is specified then convert it to an array
    if (!Array.isArray(steps)) {
        steps = [ steps ];
    }
    const stepCount = steps.length;

    function handleStepChange(mode: 'increase' | 'decrease', event?: FormEvent) {
        if (event) {
            event.preventDefault();
        }
        if (mode === 'increase' && stepIndex < stepCount - 1) {
            dispatchUserData({ type: 'INCREASE_STEP' });
        }
        if (mode === 'decrease') {
            if (stepIndex > 0) dispatchUserData({ type: 'DECREASE_STEP' });
            else navigate(-1);
        }
        dispatchUserData({ type: 'WRITE_CHANGES' });
    }

    return (
        <Center>
            <div className={styles.registerArea}>
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={styles.backArrow}
                    onClick={() => handleStepChange('decrease')}
                />

                <StepIndicator stepCount={stepCount}/>

                <form onSubmit={evt => handleStepChange('increase', evt)}>
                    {steps[stepIndex]}
                    <button type="submit" className={styles.nextButton}>
                        {t('next')}
                    </button>
                </form>
            </div>
        </Center>
    );
}
