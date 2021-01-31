import Vue from 'vue'
import { get } from 'lodash-es'
import { USER, LOGIN, LOGOUT, REGISTER } from '@/constants';
import HTTP from '@/services/HttpService'
import UserCookie from '@/services/UserCookie'

const NAME_MAX_LENGTH = 12

/**
 * Creates a default User Obj
 *
 * @return {User} UserObj
 */
const defaultUserObj = () => {
  return {
    id: -1,
    email: null,
    name: '',
    first_name: null,
    last_name: null,
  }
}

/**
 * Returns initial store state
 *
 * @returns {object}
 */
function initState () {
  const userLocal = UserCookie.get()
  const userInit = userLocal ? JSON.parse(userLocal) : defaultUserObj()

  return {
    user: userInit,
    isLoggedIn: !!userInit.email
  }
}


const mutations = {
  /**
   * Set local state to be logged in and
   *  update state.user details
   *
   * @param state
   * @param {object} input
   */
  login: function (state, input) {
    state.isLoggedIn = true
    mutations.set(state, input)
  },
  /**
   * Set local state to be logged out
   *  and remove state.user details
   *
   * @param state
   */
  logout: function (state) {
    state.isLoggedIn = false
    mutations.set(state, null)
  },
  /**
   * Sets the User state
   *
   * @param state
   * @param {object} input
   */
  set: function (state, input) {
    if (!input) {
      UserCookie.remove()
    }

    Object.entries(input).forEach(([key, value]) => {
      Vue.set(state.user, key, value)
    })

    if (input.email) {
      let name = input.email.split('@')[0]
      name = name.length < NAME_MAX_LENGTH ?
        name : (name.slice(0,NAME_MAX_LENGTH - 2) + '..')
      Vue.set(state.user, 'name', name)
    }

    UserCookie.save(state.user)
  }
}
const actions = {
  /**
   * Register User via API
   *
   * @param context
   * @param {Login}    input   login details
   * @return {Promise}
   */
  register: function (context, input) {
    return HTTP.post(REGISTER.API.POST, input)
        .then(({ data }) => {
          context.commit('login', data.user)
          return data.user
        })
  },
  /**
   * Login User via API
   *
   * @param context
   * @param {Login}    input   login details
   * @return {Promise}
   */
  login: function (context, input) {
    return HTTP.post(LOGIN.API.POST, input)
    .then(({ data }) => {
      context.commit('login', data.user)
      return data.user
    })
  },
  /**
   * Logout User via API
   *
   * @param context
   * @return {Promise}
   */
  logout: function (context) {
    return HTTP.remove(LOGOUT.API.DELETE)
    .then(() => {
      context.commit('logout')
    })
  },
  /**
   * Get User details via API
   *
   * @param context
   * @return {Promise}
   */
  get: function (context) {
    return HTTP.get(USER.API.GET)
    .then(({ data }) => {
      context.commit('set', data.user)
      return data.user
    })
  },
  /**
   * Patch User details via API
   *
   * @param context
   * @param {object} input    object of changes
   * @return {Promise}
   */
  patch: function (context, input) {
    return HTTP.patch(`${USER.API.PATCH}/${input.id}`, input)
    .then(({ data }) => {
      context.commit('set', data.user)
    })
  },
  /**
   * Remove User via API
   *
   * @param context
   * @return {Promise}
   */
  remove: function (context) {
    return HTTP.remove(`${USER.API.DELETE}/${context.state.user.id}`)
  }
}

export default {
  namespaced: true,
  state: initState(),
  mutations: mutations,
  actions: actions
}

/**
 * @typedef {object}    User
 *
 * @property {number}   id
 * @property {string}   email
 * @property {string}   password    - only on creation
 * @property {string}   name
 * @property {string}   first_name
 * @property {string}   last_name
 */

