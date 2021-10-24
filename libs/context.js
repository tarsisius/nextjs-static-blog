import { createContext, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'data':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export const DataContext = createContext()

export function DataProvider({ children }) {
    const initialState = {
        data: {},
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}