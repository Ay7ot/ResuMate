export type AuthContextType = {
    email: string;
    password: string;
    passwordConfirm: string;
    authDispatch: React.Dispatch<AuthActionType>;
    errorMessage: {
        type: 'email'| 'password' | 'passwordConfirm' | null,
        message: string;
    }
}

export type AuthActionType = {
    type: string;
    payload?: {
        emailPayload?: string;
        passwordPayload?: string;
        passwordConfirmPayload?: string;
        errorMessagePayload?: {
            type: 'email'| 'password' | 'passwordConfirm',
            message: string;
        }
    }
}