import {Component, createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {ExitSensor} from '..';
import ShowDocs from '../../../.storybook/ShowDocs'
import {StoryExitSensorExample} from './StoryExitSensorExample';

storiesOf('Sensors/ExitSensor', module)
  .add('Example', () => <StoryExitSensorExample />)
  .add('Can display nothing', () =>
    <div>
      <ExitSensor></ExitSensor>
    </div>
  )
  .add('Shows error on invalid child', () =>
    <div>
      <ExitSensor>{'Hello' as any}</ExitSensor>
    </div>
  );
