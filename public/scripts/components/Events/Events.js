import React from 'react';
import { Timeline } from '../Timeline/Timeline';

export const Events = ({ timelines }) => (
  <div style={{ width: '100%' }}>
    {timelines.map(timeline => <Timeline key={timeline}>{timeline}</Timeline>)}
  </div>
);
