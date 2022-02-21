import { createContext, useEffect, useState } from "react"

const MenuContext = createContext();

export const PositionProvider = ({children}) => {
    const [position, setPosition] = useState([]);
    const [itemPosition, setItemPosition] = useState(0); 

    return (
        <MenuContext.Provider value={{position, setPosition, itemPosition, setItemPosition}}>
             {children}
        </MenuContext.Provider>
    );
}

export default MenuContext;