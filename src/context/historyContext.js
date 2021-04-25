//This react context will be used by all the deep childs which doesn't have access
//to the history object

import { createContext } from "react";

const HistoryContext = createContext();

export default HistoryContext;
