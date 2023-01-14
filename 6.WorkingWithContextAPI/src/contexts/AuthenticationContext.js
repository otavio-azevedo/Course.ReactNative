import { createContext, useState } from "react";

export const AuthenticationContext = createContext({});

export function AuthenticationProvider({ children }) {

    const [user, setUser] = useState({});

    function login(email, password) {
        if (email == 'otavio@email.com' && password == '123456') {
            setUser({
                name: 'Otávio',
                email: email,
                password: password,
                address: 'Rua 1, 123'
            });
            return 'ok'
        } else {
            return 'error'
        }
    }

    return (
        <AuthenticationContext.Provider value={
            {
                user,
                login
            }
        }>
            {children}
        </AuthenticationContext.Provider>
    )
}