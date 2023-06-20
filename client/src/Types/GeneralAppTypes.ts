export type GeneralAppContextType = {
    theme: string
    dispatch: React.Dispatch<GeneralAppActionType>;
    navShown: boolean;
}

export type GeneralAppActionType = {
    type: string;
    payload?: {
        navShownPayload?: boolean
    }
}