const fetch = require('node-fetch');
require('dotenv').config();


async function get_all() {
    try {
        let response = await fetch('https://restcountries-v1.p.rapidapi.com/all', {
                                method: 'GET',
                                headers: {
                                    'x-rapidapi-key': process.env.API_KEY,
                                    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com'
                                }
                            });
        let data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = { get_all: get_all };
