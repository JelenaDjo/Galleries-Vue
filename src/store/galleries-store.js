import galleriesService from './../services/galleries-service'

export default {
    state: {
        galleries: [],
        errors: null
        
    },
    mutations: {
        SET_GALLERIES (state, galleries) {
            state.galleries = galleries
        },
        SET_ERRORS (state, payload) {
            state.errors = payload
        }
    },
    actions: {
        async getAllGalleries ({commit}) {
            try {
                commit('SET_GALLERIES', await galleriesService.getAllGalleries())
            } catch (error) {
                commit('SET_ERRORS', error)
            }
        }

    },
    getters: {
        getAllGalleries (state) {
            return state.galleries
        }
    }
}