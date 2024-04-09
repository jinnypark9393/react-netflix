import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchMovie = ({keyword, page}) => {
    return keyword?api.get(`/search/movie?query=${keyword}&page=${page}`):api.get(`/movie/popular?page=${page}`)
}
export const useSearchMovieQuery = ({keyword, page}) => {
    return useQuery({
        // 키워드마다 매번 서치쿼리가 달라짐
        queryKey: ['movie-search', {keyword, page}],
        queryFn: () => fetchSearchMovie({keyword, page}),
        select: (result) => result.data,
    })
}