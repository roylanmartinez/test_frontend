import * as React from "react";
import { IContext } from "./App";
// interface IContext {
//     mainState: IState,
//     setValue: (key: number, value: number | boolean) => void,
// }
const AppContext = React.createContext({} as IContext);

export default AppContext;
