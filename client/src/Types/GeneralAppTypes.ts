export type GeneralAppContextType = {
    theme: string
    dispatch: React.Dispatch<GeneralAppActionType>;
    navShown: boolean;
    showLogin: boolean;
    showSignup: boolean;
}

export type GeneralAppActionType = {
    type: string;
    payload?: {
        navShownPayload?: boolean;
        showLoginPayload?: boolean;
        showSignupPayload?: boolean
    }
}