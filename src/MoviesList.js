import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=abd82c60cb3ee473e5d38d6e8a90cfa6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2',
      );
      const movies = await res.json();
      this.setState({ // eslint-disable-line
        movies: movies.results,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} img={movie} />
        ))}
      </MovieGrid>
    );
  }
}
export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
