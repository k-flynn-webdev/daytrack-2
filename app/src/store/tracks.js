import Vue from 'vue'
import { get } from 'lodash-es'
import { TRACK, TRACKS } from '@/constants';
import HTTP from '@/services/HttpService'


/**
 * Creates a default Track Obj
 *
 * @return {Track} TrackObj
 */
const defaultTrackObj = () => {
  return {
    id: -1,
    user: -1,
    value: '',
    tags: [],
    created_at: '',
    updated_at: '',
  }
}

/**
 * Returns initial store state
 *
 * @returns {object}
 */
function initState () {
  return {
    tracks: [],
  }
}


const mutations = {
  /**
   * Set tracks
   *
   * @param {object}  state
   * @param {Track[]}   input
   */
  set: function (state, input) {
    Vue.set(state, 'tracks', input)
  },
  /**
   * Add a new track
   *
   * @param {object}  state
   * @param {Track}   input
   */
  post: function (state, input) {
    state.tracks.unshift(input)
  },
  /**
   * Update a track
   *
   * @param {object}  state
   * @param {Track}   input
   */
  patch: function (state, input) {
    for (let i = 0; i < state.tracks.length; i++) {
      if (state.tracks[i].id === input.id) {
        Vue.set(state.tracks, i, input)
        return
      }
    }
  },
  /**
   * Remove a track
   *
   * @param {object}  state
   * @param {Track}   input
   */
  remove: function (state, input) {
    for (let i = 0; i < state.tracks.length; i++) {
      if (state.tracks[i].id === input.id) {
        Vue.delete(state.tracks, i)
        return
      }
    }
  },
}
const actions = {
  /**
   * Add a Track via API
   *
   * @param context
   * @param {object}    context
   * @param {Track}     input   track details
   * @return {Promise}
   */
  post: function (context, input) {
    return HTTP.post(TRACK.API.POST, input)
    .then(({ data }) => {
      context.commit('post', data.data)
      return data.data
    })
  },
  /**
   * Update a Track via API
   *
   * @param context
   * @param {object}    context
   * @param {Track}     input   track details
   * @return {Promise}
   */
  patch: function (context, input) {
    return HTTP.patch(`${TRACK.API.PATCH}/${input.id}`, input)
    .then(({ data }) => {
      context.commit('patch', data.data)
      return data.data
    })
  },
  /**
   * Remove a Track via API
   *
   * @param {object}    context
   * @param {Track}     input   track details
   * @return {Promise}
   */
  remove: function (context, input) {
    return HTTP.remove(`${TRACK.API.DELETE}/${input.id}`)
    .then(() => {
      context.commit('remove', input)
      return input
    })
  },
  /**
   * Get all Track objects via API as a List
   *
   * @param {object}      context
   * @param {Pagination}  input   pagination details
   * @return {Promise}
   */
  get: function (context, input) {
    return HTTP.get(TRACKS.API.GET, input)
    .then(({ data }) => {
      context.commit('set', data.data)
      return data.data
    })
  },
  /**
   * Get a Track object via API
   *
   * @param {object}      context
   * @param {Track}       input   track details
   * @return {Promise}
   */
  getById: function (context, input) {
    return HTTP.get(`${TRACK.API.GET}/${input.id}`)
    .then(({ data }) => {
      return data.data
    })
  },
}

export default {
  namespaced: true,
  state: initState(),
  mutations: mutations,
  actions: actions
}

/**
 * @typedef {object}    Tag
 *
 * @property {number}   id
 * @property {number}   user
 * @property {string}   value
 * @property {date}     created_at
 */

/**
 * @typedef {object}    Track
 *
 * @property {number}   id
 * @property {string}   track
 * @property {Tag[]}    tags
 * @property {date}     created_at
 * @property {date}     updated_at
 */

/**
 * @typedef {object}    Pagination
 *
 * @property {number}   skip
 * @property {number}   total
 * @property {number}   per_page
 */