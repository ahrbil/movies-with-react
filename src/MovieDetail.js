import React, { Component } from 'react';
import { Poster } from './Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=abd82c60cb3ee473e5d38d6e8a90cfa6&language=en-US`);
      const movie = await res.json();
      this.setState({ // eslint-disable-line
        movie,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} >
        <MovieInfo>
          <Overdrive id={movie.id}>
            <NormalPoster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;
const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: linear-gradient(transparent,black),url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;
const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 1rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
    margin-top: -2rem
  }
  img {
    position: relative;
    top: -3rem;
  }
`;
const NormalPoster = Poster.extend`
transition: none;
  &:hover{
    box-shadow: none;
    transform: scale(1);
  }
`;

