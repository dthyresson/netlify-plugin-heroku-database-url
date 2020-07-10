const got = require('got');
const dotenv = require('dotenv')

module.exports = {
    onPreBuild: async ({ utils }) => {
        const response = await got('https://api.heroku.com/apps/ilww/config-vars', {
            headers: {
                "Accept": "application/vnd.heroku+json; version=3",
                "Authorization": `Bearer ${process.env.HEROKU_API_TOKEN}`
            }
        });
		console.log(response.body);
    }
}