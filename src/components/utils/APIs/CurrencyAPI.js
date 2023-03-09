import axios from "axios";

// eslint-disable-next-line
export default {

    searchTerms: function (from, to) {
        return axios.get(            
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
        );
    },
    getCurrencies: function () {
        return axios.get(
            "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
        );
    }
};