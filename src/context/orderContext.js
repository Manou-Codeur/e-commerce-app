// This react context will be used by the <Order /> and it's childs
// and it will contain the function that let the order component go to next steps

import { createContext } from "react";

const OrderContext = createContext();

export default OrderContext;
