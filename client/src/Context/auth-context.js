import { useState, createContext } from "react";

const AuthContext = createContext({
    showLoginPage: false,
    setLoginPageHandler: () => {}
})

export const AuthContextProvider = ({children}) => {
    const [showLoginPage, setShowLoginPage] = useState(false);
    const setLoginPageHandler = () => {
        setShowLoginPage(!showLoginPage)
      }
    return (
        <AuthContext.Provider value={{showLoginPage: showLoginPage, setLoginPageHandler:setLoginPageHandler}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;