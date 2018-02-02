var axios = require('axios/index');


async function authAxios() {

    const token = this.props.auth.getAccessToken();

     axios.interceptors.request.use(function (config) {

        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }

        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        config.headers['Expires'] = '-1';
        config.headers['Cache-Control'] = "no-cache,no-store,must-revalidate,max-age=-1,private";

        return config;

    }, function (err) {

        return Promise.reject(err);
    });
    return axios;
}

export {authAxios}