import React from 'react';
import { StepProps, StudentDataKeys, StudentGradeData } from './Step';
import './StudentGradeStep.scss';
import { useTranslation } from 'react-i18next';
import RadioButton from '../../Form/RadioButton';

export default function StudentGradeStep({
    changeValue,
    writeChanges,
    values,
}: StepProps<StudentGradeData, StudentDataKeys>) {
    const { t } = useTranslation();

    // function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    //     const { value, attributes } = evt.target;
    //     const key = attributes.getNamedItem('name')?.value!;
    //     changeValue('grade', key, value);
    //     }

    let element = 1;

    const elementaryClass = ['CP', 'CE1', 'CE2', 'CM1', 'CM2'];
    const collegeClass = ['6eme', '5eme', '4eme', '3eme'];
    const highSchoolVoje = [
        'Générale',
        'Technologique',
        'Professionnelle',
        'Générale/Technologique',
    ];
    const highSchoolClass = ['Seconde', 'Première', 'Terminale'];
    const highSchoolGenerale = ['Math', 'NSI', 'Physique', 'SVT'];

    // if (element === 1){
    //     const level = elementaryClass.map
    // }
    // if (document.getElementById('check1').checked){
    //     check_value = document.getElementById('check1').value;
    //     console.log(check_value)
    // }
    return (
        <>
            <h1>{t('who are you')}</h1>
            <div id="student-grade-inputs">
                <div className="student-grade-choice">
                    <div className="button">
                        <RadioButton
                            id="check1"
                            label="Elementary School"
                            name="Level"
                            checked
                        />
                        <RadioButton label="College" name="Level" />
                        <RadioButton label="High School" name="Level" />
                        <RadioButton label="University" name="Level" />
                    </div>
                    <div className="vertical-line" />
                </div>
                <div className="student-grade-choice">
                    <div className="button">
                        <RadioButton
                            label="Voie générale"
                            name="Voie"
                            onBlur={writeChanges}
                            checked
                        />
                        <RadioButton
                            label="Voie technologique"
                            name="Voie"
                            onBlur={writeChanges}
                        />

                        <RadioButton
                            label="Voie professionnelle"
                            name="Voie"
                            onBlur={writeChanges}
                        />
                    </div>
                    <div className="vertical-line" />
                </div>
                <div className="student-grade-choice">
                    <div className="button">
                        <RadioButton
                            label="Seconde"
                            name="Class"
                            onBlur={writeChanges}
                            checked
                        />
                        <RadioButton
                            label="Première"
                            name="Class"
                            onBlur={writeChanges}
                        />
                        <RadioButton
                            label="Terminale"
                            name="Class"
                            onBlur={writeChanges}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

//onBlur={writeChanges}
// <InputField
//                     type="radio"
//                     name="highSchool"
//                     value={values.highSchool}
//                     label={t('high school')}
//                     onChange={handleInputChange}
//                     onBlur={writeChanges}
//                     required
//                 />
