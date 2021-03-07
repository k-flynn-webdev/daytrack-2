import { get } from 'lodash-es'

export const genericErrMixin = {
    methods: {
        handleError (err) {
            this.$message.add({
                message: get(err, 'response.data', err.message),
                class: 'is-error',
            })
            throw err
        }
    }
}

// to do: Currently broken
export const genericErrPlugin = {
    install(Vue, options) {
        Vue.$handleErr = (err) => {
            // if (!get(this, '$message')) return
            Vue.$message.add({
                message: get(err, 'response.data', err.message),
                class: 'is-error',
            })

            throw err
        }
    }
}


