export type UserDetailContextType = {
    userDispatch: React.Dispatch<userActionType>;
    firstName: string;
    lastName: string;
    profession: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    professionalSummary: string;
    skills: {
        skill: string,
        id: string, 
        isShowing: boolean
    }[];
    languages: {
        language: string,
        id: string, 
        isShowing: boolean
    }[];
    workHistory: jobInformation[];
    education: school[];
}

export type jobInformation = {
    jobTitle: string;
    month: {
        start: string;
        end: string;
    };
    companyName: string;
    jobItems: {jobDetail: string, id: string}[];
    location: string;
    id: string;
    isShowing: boolean;
}

export type school = {
    schoolName: string;
    degree: string;
    month: {
        start: string;
        end: string;
    };
    course?: string;
    location: string;
    id: string;
    isShowing: boolean
}

export type userActionType = {
    type: string;
    payload?: {
        firstNamePayload?: string;
        lastNamePayload?: string;
        professionPayload?: string;
        phoneNumberPayload?: string;
        emailPayload?: string;
        countryPayload?: string;
        statePayload?: string;
        professionalSummaryPayload?: string;
        skillsPayload?: {skill: string, id: string, isShowing: boolean}[];
        languagesPayload?: {language: string, id: string, isShowing: boolean}[];
        workHistoryPayload?: jobInformation[];
        educationPayload?: school[];
    }
}