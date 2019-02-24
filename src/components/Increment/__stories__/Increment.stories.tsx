import React from 'react';
import { storiesOf } from '@storybook/react';
import { Increment } from '../Increment';

storiesOf('Increment', module)
    .add('default', () => {
        return <Increment />
    })