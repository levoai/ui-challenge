import { createContext } from "react";


const OrganizationContext = createContext([
    [{ name: "", id: "" }],
    (obj: any) => obj
]);

export default OrganizationContext;