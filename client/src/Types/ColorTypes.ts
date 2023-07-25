export type colorContext = {
    Istanbul: color[],
    Porto: color[],
    Lisbon: color[],
    Madrid: color[],
    Kyiv: color[],
    Cardiff: color[],
    Milan: color[],
    Berlin: color[],
    currentColor: color,
    colorDispatch: React.Dispatch<colorReducerAction>
}

export type color = {
    color: string;
    id: string,
    isActive: boolean
}

export type colorReducerAction = {
    type: string;
    payload?: {
        istanbulPayload?: color[];
        portoPayload?: color[];
        lisbonPayload?: color[];
        madridPayload?: color[];
        kyivPayload?: color[];
        cardiffPayload?: color[];
        milanPayload?: color[];
        berlinPayload?: color[];
        currentColorPayload?: color;
    }
}