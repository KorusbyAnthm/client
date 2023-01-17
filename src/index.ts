// Axios import for creating instance
import axios from "axios";

// Korus library imports
import regex from "@korusbyanthm/regex";
import ksrt from "@korusbyanthm/ksrt";

// Import handlers
import user_get from "./user/get";
import user_new from "./user/new";
import user_me_get from "./user/me/get";

// Import config
import config from "./config";

// Create axios http client with base URL and client header
const httpClient = axios.create({ baseURL: config.endpoint });

// Build handlers into an object
const Korus = {
    user: {
        get: user_get,
        new: user_new,

        me: {
            get: user_me_get
        }
    }
};

export default Korus;
export { httpClient, regex, ksrt, Korus, config };