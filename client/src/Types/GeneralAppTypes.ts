import { User } from "firebase/auth";

export type GeneralAppContextType = {
    theme: string
    dispatch: React.Dispatch<GeneralAppActionType>;
    navShown: boolean;
    showLogin: boolean;
    showSignup: boolean;
    currentUser: User | null
}

export type GeneralAppActionType = {
    type: string;
    payload?: {
        navShownPayload?: boolean;
        showLoginPayload?: boolean;
        showSignupPayload?: boolean;
        currentUserPayload?: User | null
    }
}