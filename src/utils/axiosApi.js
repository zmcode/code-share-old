/**
 * 封装axios部分API
 */

import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true

function get(url, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
function post(url, params = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(params), config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { get, post }
