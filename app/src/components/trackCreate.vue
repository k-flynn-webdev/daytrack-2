<template>
  <div class="track-create bubble">
    <form class="track"
          @reset.prevent="onReset"
          @submit.prevent="onSubmit">

      <div class="field">
        <div class="control">
          <input id="id-track-input"
                 v-model="form.track"
                 class="input"
                 type="text"
                 placeholder="..What happened?"
                 required>
        </div>
      </div>

      <div class="track-create__tag">
        <div class="track-create__tag__row">

          <tag-item v-for="tag in form.tags"
                    :key="tag.value"
                    :tag="tag"
                    :allow-url="false"
                    :allow-info="false"
                    @click="onTagRemove(tag)" />

          <input
              type="text"
              placeholder="..#Tags"
              class="track-create__tag__row-text input"
              v-model="tagInput"
              @blur="onTagAdd"
              @keydown.32="onTagAdd"
              @keydown.188="onTagAdd"
              @keydown.enter="onTagAdd"
              @keydown.delete="onTagRemove"
          />

        </div>

        <button class="button-add bubble"
                type="submit">
          {{ loading ? '...' : 'Add' }}
        </button>

      </div>

    </form>

    <tags-recent @tagAdd="onTagAdd" />

  </div>
</template>

<script>
import { CSRF, TRACK } from '@/constants'
import HttpService from "@/services/HttpService";
import tagItem from "@/components/tagItem";
import tagsRecent from "@/components/tagsRecent";


export default {
  name: 'track-create',

  components: {
    tagItem,
    tagsRecent
  },

  data () {
    return {
      tagInput: '',
      loading: false,
      form: {
        track: '',
        tags: []
      }
    }
  },

  created () {
    return this.getToken()
        .then(() => this.onReset())
  },

  methods: {
    /** Ensure API returns a legal `CSRF` cookie to improve security */
    getToken () {
      return HttpService.get(CSRF.API.GET)
    },
    /**
     * Add a Tag object or Tag value, no duplicates allowed
     *
     * @param {event|Tag}     input   object {event} or object {Tag}
     */
    onTagAdd (input) {
      if (input.id && input.value) {
        this.form.tags.push(input)
        return
      }

      input.preventDefault()
      let val = input.target.value.trim()
      if (val.length > 0) {
        // no duplicates allowed
        for (let i = 0; i < this.form.tags.length; i++) {
          if (this.form.tags[i].value === val) return
        }

        this.form.tags.push({ value: val })
        input.target.value = ''
        this.tagInput = ''
      }
    },
    /**
     * Remove a Tag object by matching value
     *
     * @param {object}    input    Tag to be removed
     */
    onTagRemove (input) {
      if (input.value) {
        for( let i = 0; i < this.form.tags.length; i++) {
          if (this.form.tags[i].value === input.value) {
            this.form.tags.splice(i, 1)
            return
          }
        }
      }

      // remove latest tag as event
      if (this.form.tags.length > 0 &&
          input &&
          input.target &&
          input.target.value.length < 1) {
        this.form.tags.splice(this.form.tags.length - 1, 1)
      }
    },
    /** Reset Form details */
    onReset () {
      this.tagInput = ''
      this.form.track = ''
      this.form.tags = []
    },
    /**
     * Submit Login details to API for authentication
     *
     * @returns {void|Promise<boolean>}
     */
    onSubmit () {
      if (this.loading) return
      if (!TRACK.isValid(this.form)) return

      this.loading = true

      return this.$store.dispatch('track/post', {
        track: this.form.track,
        tags: this.form.tags.map(item => {
          if (item.id) { return item }
          return item.value
        })
      })
      .then(() => {
        this.onReset()
        this.getToken()
      })
      .catch(err => {
        // todo: display detail/message
      })
      .finally(() => this.loading = false)
    }
  }
}
</script>
