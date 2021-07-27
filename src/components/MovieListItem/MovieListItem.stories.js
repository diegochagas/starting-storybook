import React from 'react'
import { action } from '@storybook/addon-actions'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import MovieListItem from './index';
import { movies } from '../movies';

export default {
  title: 'components/MovieListItem',
  component: MovieListItem,
  decorators: [withKnobs],
  parameters: {
    knobs: { escapeHTML: false },
  },
  excludeStories: ['movie']
}

export const movie = {
  ...movies[2],
  title: text('Title', movies[2].title),
  overview: text('Overview', movies[2].overview),
};

export const Default = () => {
  
  return (
    <MovieListItem {...movie} onLearnMore={action('learn more')} />
  )
}

export const NoImage = () => {
  return (
    <MovieListItem {...movies[2]} backdrop_path={null} onLearnMore={action('learn more')} />
  )
}

export const AngryMen = () => {
  return (
    <MovieListItem {...object("Movie", movies[3])} onLearnMore={action('learn more')} />
  )
}

AngryMen.story = {
  name: '12 Angry Men',
  decorators: [withKnobs],
}