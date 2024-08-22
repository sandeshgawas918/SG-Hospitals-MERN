"use client"

const { createContext, useState } = require("react");

const myContext = createContext()

const MyContextProvider = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    return (
        <myContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
            {children}
        </myContext.Provider>
    )
}

export { myContext, MyContextProvider }