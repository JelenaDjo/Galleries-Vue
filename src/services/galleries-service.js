import http from './service-http'

class GalleriesService {
    getAllGalleries()
 {
     return http.get('/galleries')
        .then(({data}) => data)
 }
}

const galleriesService = new GalleriesService()

export default galleriesService