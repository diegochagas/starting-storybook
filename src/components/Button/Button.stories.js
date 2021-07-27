import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
}

export const Text = () => <Button onClick={action('clicked')} label="Hello Button" />;

export const Emoji = () => <Button onClick={action('clicked')} label="😀 😎 👍 💯" />;