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
      const contextValue  = {
        showLoginPage, setLoginPageHandler,
      }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;