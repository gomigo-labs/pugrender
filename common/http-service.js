const { body } = require("express-validator/check");
const request = require("requestretry");


class HTTPService {
    /**
     * execute Http request
     */
    static async excuteHTTPRequestForm(method, hostname, path, data, headers, form_data) {
        return await new Promise(function (fulfill, reject) {
            request({
                url: hostname + path,
                method: method,
                headers: headers,
                formData: form_data,
                maxAttempts: 3,
                retryDelay: 1000,
                retryStrategy: request.RetryStrategies.HTTPOrNetworkError
            }, function (error, response, body) {
                // console.log('body:-', body);
                if (error) {
                    console.log("err" + error);
                    reject(error);
                } else {
                    let data = [response.statusCode, body];
                    fulfill(data);
                }
            });
        });
    }


    static async excuteHTTPRequest(method, hostname, path, data, headers,url) {
        return await new Promise(function (fulfill, reject) {
            request({
                url: hostname + path,
                method: method,
                headers: headers,
                json: data,
                body: data
            }, function (error, response, body) {
                // console.log('body:-', body);
                if (error) {
                    console.log("err" + error);
                    reject(error);
                } else {
                    let data = [response.statusCode, body];
                    fulfill(data);
                }
            });
        });
    }
}

module.exports = HTTPService;
