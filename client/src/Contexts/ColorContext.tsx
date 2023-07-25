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
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
            id: nanoid(),
            isActive: true
        }
    ],
    Porto: [
        {
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: true
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Lisbon: [
        {
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: true
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Madrid: [
        {
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: true
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Kyiv: [
        {
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
            id: nanoid(),
            isActive: true
        }
    ],
    Cardiff: [
        {
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: true
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Milan: [
        {
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: true
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
            id: nanoid(),
            isActive: false
        }
    ],
    Berlin: [
        {
            color: 'bg-[#00AB44]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FF3D00]',
            id: nanoid(),
            isActive: true
        },
        {
            color: 'bg-[#3780C333]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#FFC107]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#666666]',
            id: nanoid(),
            isActive: false
        },
        {
            color: 'bg-[#1976D2]',
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