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
    currentSkill: string;
    awards: string[];
    language: string[];
    currentLanguage: string;
    workHistory: jobInformation[];
    education: school[];
    school: school
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
        currentSkillPayload?: string;
        skillsPayload?: string[];
        awardsPayload?: string[];
        languagePayload?: string[];
        currentLanguagePayload?: string
        workHistoryPayload?: jobInformation[];
        educationPayload?: school[];
        schoolPayload?: school
    }
}