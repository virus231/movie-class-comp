import React from 'react';
import Filters from './components/Filters/Filters';
import MovieList from "./components/Movies/MoviesList";


export default class App extends React.Component{
    constructor() {
        super();

        this.state = {
            filters: {
                sort_by: "popularity.desc"
            }
        }
    }

    onChange = (event) => {
        // console.log(event.target.name, event.target.value)
        const newFilters = {
            ...this.state.filters,
            [event.target.name]: event.target.value
        }
        this.setState({
            filters: newFilters
        })
    }


    render() {
        const {filters} = this.state

        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-body">
                                <h3>Фильтры</h3>
                                <Filters filters={filters} onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <MovieList filters={filters}/>
                    </div>
                </div>
            </div>
        );
    }
}
