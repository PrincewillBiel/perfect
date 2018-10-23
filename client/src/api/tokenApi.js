import axios from 'axios'
import cookie from 'cookie'

export default {
  fetchWithToken (url, options = {}) {
    const {token} = cookie.parse(document.cookie, {})
    if (token) {
      return axios({
        url,
        ...options,
        headers: {...options.headers, 'Authorization': `Bearer ${token}`}
      })
    } else {
      console.log('Failed!')
    }
  }
}
