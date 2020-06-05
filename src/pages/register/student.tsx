import React, { useEffect, useReducer } from 'react';
import RegisterNavBar from '../../components/Register/RegisterNavBar';
import RegisterSteps from '../../components/Register/RegisterSteps';
import StudentIdentityStep from '../../components/Register/RegisterSteps/StudentIdentityStep';
import StudentGradeStep from '../../components/Register/RegisterSteps/StudentGradeStep';
import { StudentData } from '../../components/Register/RegisterSteps/Step';
import { initialState, reducer, RegisterActions } from '../../modules/reducers/student-register';

export const StudentRegisterContext = React.createContext<{ userData: StudentData, dispatchUserData: React.Dispatch<RegisterActions> }>({} as any);

function StudentRegisterPage() {

    const [ userData, dispatch ] = useReducer(reducer, initialState);

    // Loading value if stored in cache
    useEffect(() => {
        dispatch({ type: 'LOAD_FROM_CACHE' });
    }, []);

    return (
        <>
            <RegisterNavBar/>

            <StudentRegisterContext.Provider value={{ userData, dispatchUserData: dispatch }}>

                <RegisterSteps pageName="register">
                    <StudentIdentityStep/>
                    <StudentGradeStep/>
                </RegisterSteps>

            </StudentRegisterContext.Provider>
        </>
    );
}

export default StudentRegisterPage;
