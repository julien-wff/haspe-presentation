import React, { MouseEvent, useContext, useEffect, useState } from 'react';
import styles from './StepIndicator.module.scss';
import { StudentRegisterContext } from '../../../pages/register/student';

interface Props {
    stepCount: number;
}

const SVG_WIDTH = 1000;
const SVG_HEIGHT = 100;
const CIRCLE_RAD = 30;


export default function StepIndicator({ stepCount }: Props) {

    const { userData: { step: stepIndex }, dispatchUserData } = useContext(StudentRegisterContext);
    const [ figures, setFigures ] = useState([] as JSX.Element[]);

    useEffect(() => {
        // Generate figures
        let circles: JSX.Element[] = [],
            rects: JSX.Element[] = [];
        for (let i = 0; i < stepCount; i++) {
            // Add a circle
            let x = (SVG_WIDTH / stepCount) * i + SVG_WIDTH / stepCount / 2,
                y = SVG_HEIGHT / 2;
            circles.push(
                <circle
                    cx={x}
                    cy={y}
                    r={CIRCLE_RAD}
                    className={i <= stepIndex ? styles.completed : ''}
                    onClick={evt => handleFigureClick(evt, i)}
                    key={`circle-${i}`}
                />,
            );

            // Add a linking rectangle if necessary
            if (i + 1 < stepCount) {
                let height = (CIRCLE_RAD / 3) * 2;
                rects.push(
                    <rect
                        x={x}
                        y={y - height / 2}
                        height={height}
                        width={SVG_WIDTH / stepCount}
                        className={i < stepIndex ? styles.completed : ''}
                        onClick={evt => handleFigureClick(evt, i + 1)}
                        key={`rect-${i}`}
                    />,
                );
            }
        }

        // Put the rectangles first, then the circles
        setFigures([ ...rects, ...circles ]);
    }, [ stepIndex, stepCount ]);

    function handleFigureClick(evt: MouseEvent<SVGGElement>, index: number) {
        if ((evt.target as SVGGElement).classList.contains('completed')) {
            dispatchUserData({ type: 'SET_STEP', payload: index });
        }
    }

    return (
        <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} className={styles.stepIndicator}>
            {figures}
        </svg>
    );
}
