import { config } from "../../config/config";

export const getUrlApi = () => {
    let { URL_GET_OPTIONS, URL_API_BASE } = config;
    // eslint-disable-next-line no-restricted-globals
    let host = location.hostname;
    // eslint-disable-next-line no-restricted-globals
    let protocol = location.protocol;
    // eslint-disable-next-line no-restricted-globals
    let existsInUrlTest = location.href.includes("test");

    let urlBase = protocol + "//" + host + (existsInUrlTest ? "/test" : "");
    if (host.includes("localhost")) {
        urlBase = URL_API_BASE;
    }

    return `${urlBase}/${URL_GET_OPTIONS}`;
}