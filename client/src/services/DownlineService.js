import Api from '@/services/Api'

export default {
  postDownline (credentials) {
    return Api().post('/api/user/downlines/create', credentials)
  }
}
