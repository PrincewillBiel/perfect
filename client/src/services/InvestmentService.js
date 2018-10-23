import Api from '@/services/Api'

export default {
  createInv (credentials) {
    return Api().post('investment', credentials)
  }
}
