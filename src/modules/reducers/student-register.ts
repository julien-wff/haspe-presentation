import { StudentData } from '../../components/Register/RegisterSteps/Step';
import loadRegisterFromCache from '../actions/load-register-from-cache';
import writeRegisterToCache from '../actions/write-register-to-cache';

export const initialState: StudentData = {
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
    step: 0,
};

const STORAGE_KEY = 'student-register-data';

export const reducer = (state = initialState, action: RegisterActions): StudentData => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.payload.field]: {
                    ...state[action.payload.field],
                    [action.payload.key]: action.payload.value,
                },
            };
        case 'WRITE_CHANGES':
            console.log('save (reducer)');
            writeRegisterToCache(STORAGE_KEY, state);
            return state;
        case 'LOAD_FROM_CACHE':
            return loadRegisterFromCache(STORAGE_KEY) || state;
        case 'DECREASE_STEP':
            return {
                ...state,
                step: state.step - 1,
            };
        case 'INCREASE_STEP':
            return {
                ...state,
                step: state.step + 1,
            };
        case 'SET_STEP':
            return {
                ...state,
                step: action.payload,
            };
        default:
            return state;
    }
};

export type RegisterActions =
    WriteChangesAction
    | SetFieldAction
    | LoadFromCacheAction
    | DecreaseStepAction
    | IncreaseStepAction
    | SetStepAction;

interface WriteChangesAction {
    type: 'WRITE_CHANGES',
    payload?: undefined,
}

interface LoadFromCacheAction {
    type: 'LOAD_FROM_CACHE',
    payload?: undefined,
}

interface SetFieldAction {
    type: 'SET_FIELD',
    payload: {
        field: 'identity' | 'grade',
        key: string,
        value: string,
    }
}

interface DecreaseStepAction {
    type: 'DECREASE_STEP',
    payload?: undefined,
}

interface IncreaseStepAction {
    type: 'INCREASE_STEP',
    payload?: undefined,
}

interface SetStepAction {
    type: 'SET_STEP',
    payload: number,
}
