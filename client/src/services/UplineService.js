import Api from '@/services/Api'

export default {
  postUpline (credentials) {
    return Api().post('/api/user/upline', credentials)
  },
  getUpline (code) {
    return Api().get(`/api/user/upline/${code}`)
  }
}
