import { ReactNode, createContext, useReducer } from "react";
import { colorContext } from "../Types/ColorTypes";
import { nanoid } from "nanoid";
import { useColorContext } from "../Functions/useColorContext";
import { colorReducer } from "../Functions/colorReducer";

export const ColorContext = createContext<colorContext>({
    colorDispatch: ()=>{return},
    currentColor: {
        color: '',
        id: '',
        isActive: false
    },
    Istanbul: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: true
        }
    ],
    Porto: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: true
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Lisbon: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: true
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Madrid: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: true
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Kyiv: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: true
        }
    ],
    Cardiff: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: true
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Milan: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: true
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Berlin: [
        {
            color: '[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FF3D00]',
            id: nanoid(),
            isActive: true
        },
        {
            color: '[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: '[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ]
})

export function ColorProvider({children}: {children: ReactNode}){

    const value = useColorContext()

    const [colorState, colorDispatch] = useReducer(colorReducer, value)

    return (
        <ColorContext.Provider value={{...colorState, colorDispatch}}>
            {children}
        </ColorContext.Provider>
    )
}