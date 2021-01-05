import axios from 'axios';

export const Post = (url, reqContent) => {

    return axios.post(url, reqContent);

}

export const Get = (url) => {
    return axios.get(url)
}
