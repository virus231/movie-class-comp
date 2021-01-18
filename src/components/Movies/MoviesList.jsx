import React from 'react'
import {API_KEY, API_URL} from '../../api/api'
import MovieItem from "./MovieItem";

export default class MovieList extends React.Component {


    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    getMovies = (filters) => {
        const {sort_by} = filters
        const link = `${API_URL}/discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=${sort_by}`
        fetch(link)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results
                })
            })
    }

    componentDidMount() {
        // const {filters : {
        //     sort_by
        // }} = this.props;
        //
        // const link = `${API_URL}/discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=${sort_by}`
        // fetch(link)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({
        //             movies: data.results
        //         })
        //     })
        this.getMovies(this.props.filters)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.filters.sort_by !== prevProps.filters.sort_by) {
            this.getMovies(this.props.filters)
        }
    }

    render() {
        const {movies} = this.state
        return (
            <div className="row">
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.id} className="col-6 mb-4">
                                <MovieItem item={movie} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
