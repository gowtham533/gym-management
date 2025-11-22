import axios from "axios";

const commonAPI = async(httpMethod, url, reqBody) => {
    const requestConfig = {
        url,
        method: httpMethod,
        data: reqBody
    }
    return await axios(requestConfig).then(res => res).catch(err => err)
}

export default commonAPI;