import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory
    setMenu?: (newMenu: MenuItem[]) => void
}

const defaultContext: IAppContext = {
    menu: [],
    firstCategory: TopLevelCategory.Courses
}

export const AppContext = createContext<IAppContext>(defaultContext)

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    }

    return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>
}