import React, { Component } from 'react'
import './playerContainer.css'
import { ResponsivePlayer } from '../../components'

export default class PlayerContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            DataisLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://gruppe9.toni-barth.com/movies/" + this.props.movieId + "/" + this.props.clipId + "/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movies: json,
                    DataisLoaded: true
                });
            })
    }

    handleWatchComplete(state) {
        console.log(state);
    }

    render() {
        const { DataisLoaded, movies } = this.state;
        if (!DataisLoaded) return <div><h1>Bitte warte kurz...</h1></div>;

        return (
            <div>
                <ResponsivePlayer url={movies.link}/>
            </div>
        )
    }
}

