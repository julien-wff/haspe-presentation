import React, { useEffect, useState } from 'react';
import RegisterNavBar from '../../components/Register/RegisterNavBar';
import RegisterSteps from '../../components/Register/RegisterSteps';
import StudentIdentityStep from '../../components/Register/RegisterSteps/StudentIdentityStep';
import StudentGradeStep from '../../components/Register/RegisterSteps/StudentGradeStep';
import {
    StudentData,
    StudentDataKeys,
} from '../../components/Register/RegisterSteps/Step';

const STORAGE_KEY = 'student-register-data';

function StudentRegisterPage() {
    let defaultValue: StudentData = {
        identity: {
            lastName: '',
            firstName: '',
            birthDate: '',
            city: '',
            country: '',
            institution: '',
        },
        grade: {
            elemantarySchool: '',
            college: '',
            highSchool: '',
            university: '',
        },
    };
    const [userData, setUserData] = useState(defaultValue);

    // Loading value if stored in cache
    useEffect(() => {
        const cacheData = sessionStorage.getItem(STORAGE_KEY);
        if (cacheData) {
            try {
                const parsedCacheData = JSON.parse(cacheData);
                if (typeof parsedCacheData === 'object')
                    setUserData(parsedCacheData);
            } catch {}
        }
    }, []);

    function handleStepValueChange(
        stepName: StudentDataKeys,
        key: string,
        value: any,
    ) {
        setUserData(prevState => ({
            ...prevState,
            [stepName]: {
                ...prevState[stepName],
                [key]: value,
            },
        }));
    }

    function writeChanges() {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    }

    return (
        <>
            <RegisterNavBar />

            <RegisterSteps pageName="register">
                <StudentIdentityStep
                    changeValue={handleStepValueChange}
                    values={userData.identity}
                    writeChanges={writeChanges}
                />
                <StudentGradeStep
                    changeValue={handleStepValueChange}
                    values={userData.grade}
                    writeChanges={writeChanges}
                />
            </RegisterSteps>
        </>
    );
}

export default StudentRegisterPage;
