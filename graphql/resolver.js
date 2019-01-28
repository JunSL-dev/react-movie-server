import axios from 'axios'

const API_URL = "https://yts.am/api/v2/"

const api = axios.create({
    baseURL:API_URL,
    method:'POST'
})

const resolvers = {
    Query:{
        movies: async () => {
            const {data:{data:{movies}}} = await api.request({
                url:'/list_movies.json',
            })
            return movies
        },
        movie: async (_,{id}) => {
            const {data:{data:{movie}}} = await api.request({
                url:'/movie_details.json',
                params:{
                    movie_id:id
                }
            })
            return movie
        },
        suggestions: async (_,{id}) => {
            const {data:{data:{movies}}} = await api.request({
                url:'/movie_suggestions.json',
                params:{
                    movie_id:id
                }
            })   
            
            console.log(_)
            return movies
        }
    }
}

export default resolvers