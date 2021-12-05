import { useEffect, useRef, useState } from "react";


export interface UseFecthData {
    data: any,
    loading: boolean,
    error: any
}
export const useFetch = (url: string) => {
    // uso de useRef
    const isMounted = useRef(true);
    const [state, setState] = useState<UseFecthData>(
        {
            data: null, loading: true, error: null
        }
    );

    useEffect(() => {
        // cuando se desmonte el componente la referencia estara en false
        return () => {

            isMounted.current = false
        }
    }, []);

    useEffect(() => {
        (async () => {
            try {
                let data = (await (await fetch(url)).json());
                if (isMounted.current) {
                    setState({ loading: false, data, error: null });
                } else {
                    // console.log("El useState no se esta ejecutando ");

                }
            } catch (error) {
                setState({ loading: true, data: null, error: "No se pudo cargar la info" });
            }

        })()
    }, [url])


    return state;
}
