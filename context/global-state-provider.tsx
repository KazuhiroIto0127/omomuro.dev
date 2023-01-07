import React, { Dispatch, createContext, useState } from 'react';

export const GlobalContext = createContext(
    {} as {
        isOpenPcSidebar: boolean;
        setIsOpenPcSidebar: Dispatch<React.SetStateAction<boolean>>;
    }
);

export function GlobalProvider({children}) {
    const [isOpenPcSidebar, setIsOpenPcSidebar] = useState<boolean>(true)

    return (
        <GlobalContext.Provider value={{isOpenPcSidebar, setIsOpenPcSidebar}}>
            {children}
        </GlobalContext.Provider>
    );
}
