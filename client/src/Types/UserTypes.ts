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
    skills: string[];
    awards: string[];
    language: string[];
    workHistory: jobInformation[];
    education: school[]
}

export type jobInformation = {
    jobTitle: string;
    month: {
        start: string;
        end: string;
    };
    companyName: string;
    jobItems: string[];
}

export type school = {
    schoolName: string;
    degree: string;
    month: {
        start: string;
        end: string;
    };
    course?: string
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
        skillsPayload?: string[];
        awardsPayload?: string[];
        languagePayload?: string[];
        workHistoryPayload?: jobInformation[];
        educationPayload?: school[]
    }
}