import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import App from './App';

const story = storiesOf('Component/App', module);

story.add('default',
  withInfo()(() => (
    <App name="AppName" description="Minimal React boilerplate for starter" />
  )));