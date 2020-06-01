import React, { FormEvent, useEffect, useState } from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { navigate } from '@reach/router';
import Center from '../../Center';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StepIndicator from './StepIndicator';

interface Props {
    children: JSX.Element | JSX.Element[];
    pageName: string;
}

export default function RegisterSteps({ children: steps, pageName }: Props) {
    const [stepIndex, setStepIndex] = useState(0);
    const { t } = useTranslation();

    // Read the saved index from the session storage
    useEffect(() => {
        const cacheStepIndex = sessionStorage.getItem(`step-${pageName}`);
        const cacheStepIndexInt = parseInt(cacheStepIndex!);
        if (cacheStepIndex && !isNaN(cacheStepIndexInt))
            setStepIndex(cacheStepIndexInt);
    }, []);

    // Write the actual index into the session storage
    useEffect(() => {
        sessionStorage.setItem(`step-${pageName}`, stepIndex.toString());
    }, [pageName, stepIndex]);

    // If only one step is specified then convert it to an array
    if (!Array.isArray(steps)) {
        steps = [steps];
    }
    const stepCount = steps.length;

    function handleStepChange(
        mode: 'increase' | 'decrease',
        event?: FormEvent,
    ) {
        if (event) {
            event.preventDefault();
        }
        if (mode === 'increase' && stepIndex < stepCount - 1) {
            setStepIndex(prevState => prevState + 1);
        }
        if (mode === 'decrease') {
            if (stepIndex > 0) setStepIndex(prevState => prevState - 1);
            else navigate(-1);
        }
    }

    return (
        <Center>
            <div id="register-area">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    id="back-arrow"
                    onClick={() => handleStepChange('decrease')}
                />

                <StepIndicator
                    stepIndex={stepIndex}
                    stepCount={stepCount}
                    setStepIndex={setStepIndex}
                />

                <form onSubmit={evt => handleStepChange('increase', evt)}>
                    {steps[stepIndex]}
                    <button type="submit" id="next-button">
                        {t('next')}
                    </button>
                </form>
            </div>
        </Center>
    );
}
