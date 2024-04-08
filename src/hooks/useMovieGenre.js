import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = () => {
    return api.get(`/genre/movie/list`)
}

const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres,
        staleTime: 30000, // 5min
    })
}

export default useMovieGenreQuery