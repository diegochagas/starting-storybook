import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';  

import MovieDetails from './index';
import { movies } from '../movies';

export default {
  title: 'Organisms/MovieDetails',
  component: MovieDetails,
  decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const TheGodfather = () => {
  return (
    <MovieDetails movie={movies[2]} saveMovie={action('saveMovie')} />
  );
};

export const Loading = () => {
  return <MovieDetails loading />
};

export const ErrorOnSave = () => {
  return <MovieDetails movie={movies[2]} saveMovie={() => {
    throw new Error('Unable to save the movie');
  }} />;
};

export const SlowSave = () => {
  return (
    <MovieDetails
      movie={movies[2]}
      saveMovie={async () => {
        await new Promise(resolve => setTimeout(resolve, 5000))
      }}
    />
  )
}