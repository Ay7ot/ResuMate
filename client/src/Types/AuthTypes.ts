export type AuthContextType = {
    email: string;
    password: string;
    passwordConfirm: string;
    authDispatch: React.Dispatch<AuthActionType>
}

export type AuthActionType = {
    type: string;
    payload?: {
        emailPayload?: string;
        passwordPayload?: string;
        passwordConfirmPayload?: string;
    }
}