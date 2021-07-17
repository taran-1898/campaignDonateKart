const request = require('request')
const { promisify } = require('util')

module.exports.get = async ({ url, params, qs }) => {
    const get = promisify(request.get)
    const response = await get({
      url,
      params,
      qs
    })
    return response
  }
  