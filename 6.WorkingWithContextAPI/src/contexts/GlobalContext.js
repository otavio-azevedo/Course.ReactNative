import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
    const test = 150;
    const [name, setName] = useState('Otávio');

    return (
        <GlobalContext.Provider value={{ test, name }}>
            {children}
        </GlobalContext.Provider>
    )
}