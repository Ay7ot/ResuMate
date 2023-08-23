import { User } from "firebase/auth";

export type GeneralAppContextType = {
    theme: string
    dispatch: React.Dispatch<GeneralAppActionType>;
    navShown: boolean;
    showLogin: boolean;
    showSignup: boolean;
    currentUser: User | null;
    resumeTemplates: {
        name: string;
        image: string;
        isSelected: boolean
    }[];
    itemRef: React.MutableRefObject<HTMLDivElement | null>;
    resumeFont: 'Public' | 'Poppins' | 'Inter' | 'Bricolage'
}

export type GeneralAppActionType = {
    type: string;
    payload?: {
        navShownPayload?: boolean;
        showLoginPayload?: boolean;
        showSignupPayload?: boolean;
        currentUserPayload?: User | null;
        itemRefPayload?: React.MutableRefObject<HTMLDivElement | null>
        resumeTemplatesPayload?:  {
            name: string;
            image: string;
            isSelected: boolean
        }[];
        resumeFontPayload?: 'Public' | 'Poppins' | 'Inter' | 'Bricolage'
    }
}