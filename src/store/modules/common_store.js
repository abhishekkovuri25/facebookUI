import commonApi from '@/api'
import router from '../../router'

const state = {
  loginDetails: null,
  signupMessage: '',
  query: '',
  loginMessage: ''
}

const mutations = {
  SIGNUP_MESSAGE: (state, value) => {
    state.signupMethod = value
  },
  LOGIN_DETAILS: (state, value) => {
    state.loginDetails = value
    if (state.loginDetails == null) {

      router.push({name: 'Signin'})
    }
    else {
      router.push({name: 'Home'})
    }
  },
  QUERY: (state, value) => {
    state.query = value
  },
  LOGIN_MESSAGE: (state, value) => {
    state.loginMessage = value
  }
}

const actions = {
  loginMethod ({commit}, data) {
    commonApi.postDataViaApi('/users/login', data,
      (response) => {
        commit('LOGIN_DETAILS', response.body)
        sessionStorage.setItem('UserId', response.body.userId)
      },
      (error) => {
        console.log(error)
        commit('LOGIN_DETAILS', null)
        commit('LOGIN_MESSAGE', error.data.message)
      }
    )
  },
  performSearch ({commit}, data) {
    commit('QUERY', data)
  }
}

const getters = {
  signupMethod: (state) => {
    return state.signupMessage
  },
  loginMethod: (state) => {
    return state.loginDetails
  },
  queryGetter: (state) => {
    return state.query
  },
  displayerror: (state) => {
    return state.loginMessage
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
