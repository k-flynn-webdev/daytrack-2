<template>
  <div class="track-create bubble">
    <form class="track"
          @reset.prevent="onReset"
          @submit.prevent="onSubmit">

<!--      <div class="field">-->
<!--        <div class="control">-->
<!--          <input id="id-track-input"-->
<!--                 v-model="form.value"-->
<!--                 class="input"-->
<!--                 type="text"-->
<!--                 placeholder="..What happened?"-->
<!--                 required>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="field is-flex">-->
<!--        <div class="control is-flex-grow-1">-->
<!--          <div class="track-create__tag__input">-->

      <div class="track-create__tag">
        <div class="track-create__tag__row">

          <!-- fake input bar to capture input on this row -->
          <input
              type="text"
              class="track-create__tag__row-input input"
              v-model="tagInput"
              @keydown.32="onTagAdd"
              @keydown.188="onTagAdd"
              @keydown.enter="onTagAdd"
              @keydown.delete="onTagRemove"
          />

          <tag-item v-for="tag in tags"
                    :key="tag.value"
                    :tag="tag"
                    :allow-info="false"
                    :allow-url="false"
                    @click="onTagRemove(tag)" />

          <input
              type="text"
              placeholder="..#Tags"
              class="track-create__tag__row-text input"
              v-model="tagInput"
              @keydown.32="onTagAdd"
              @keydown.188="onTagAdd"
              @keydown.enter="onTagAdd"
              @keydown.delete="onTagRemove"
          />

        </div>

        <button class="button is-success add ml-3 bubble"
                type="submit">
          {{ loading ? '...' : 'Add' }}
        </button>

      </div>

    </form>

    <tags-recent @tag-add="onTagAdd" @tagAdd="onTagAdd" />

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
      tags: [],
      loading: false,
      // form: {
      //   value: '',
      //   tags: {
      //     local: '',
      //     items: []
      //   },
      // }
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
     * @param {event|Tag}    input    object {event} or object {Tag}
     */
    onTagAdd (input) {
      if (input.id && input.value) {
        this.tags.push(input)
        return
      }

      input.preventDefault()
      let val = input.target.value.trim()
      if (val.length > 0) {
        // no duplicates allowed
        for (let i = 0; i < this.tags.length; i++) {
          if (this.tags[i].value === val) return
        }

        this.tags.push({ id: -1, value: val })
        input.target.value = ''
        this.tagInput = ''
      }
    },
    // onTagAdd (item) {
    //   this.form.tags.items.push(item)
    // },
    // onTagRemove (tag) {
    //   this.tags.splice(tag, 1)
    // },
    /**
     * Remove a Tag object by matching value
     *
     * @param {object}    input    Tag to be removed
     */
    onTagRemove (input) {
      if (input.id && input.value) {
        for( let i = 0; i < this.tags.length; i++) {
          if (this.tags[i].value === input.value) {
            this.tags.splice(i, 1)
            return
          }
        }
      }

      // remove latest tag as event
      if (this.tags.length > 0 &&
          input &&
          input.target &&
          input.target.value.length < 1) {
        this.tags.splice(this.tags.length - 1, 1)
      }
    },
    /** Reset Form details */
    onReset () {
      // this.form.value = ''
      // this.form.tags.local = ''
      // this.form.tags.items = []
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
        value: this.form.value,
        tags: this.form.tags
      })
      .then(() => {
        this.resetForm()
        this.getToken()
      })
      .catch(err => {
        // todo: display detail/message
      })
      .finally(() => this.loading = false)
    },
    // updateTag: function (value) {
      // this.$emit('input', value)
    // }
  }
}
</script>
