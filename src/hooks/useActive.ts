import { useState } from "react";

// de esta manera se le pude poner tipado generico a las arrow functions
export const useActive = (activeDefault: boolean = false) => {
    const [active, setActive] = useState<boolean>(activeDefault);

    const toggleActive = () => {
        setActive(!active);
    }
    return { toggleActive, setActive, active };


}