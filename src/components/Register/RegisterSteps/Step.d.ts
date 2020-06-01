/**
 * Generic steps component props
 */
export interface StepProps<T, S> {
    changeValue: (stepName: S, key: string, value: any) => any;
    writeChanges: () => any;
    values: T;
}

// ---------- Student data ----------

export type StudentDataKeys = 'identity' | 'grade';

export interface StudentData {
    identity: StudentIdentityData;
    grade: StudentGradeData;
}

export interface StudentIdentityData {
    lastName: string;
    firstName: string;
    birthDate: string;
    country: string;
    city: string;
    institution: string;
}

export interface StudentGradeData {
    elemantarySchool: string;
    college: string;
    highSchool: string;
    university: string;
}
