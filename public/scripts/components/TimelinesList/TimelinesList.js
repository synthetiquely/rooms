import React from 'react';
import { Timeline } from '../Timeline/Timeline';

export const TimelinesList = ({ timelines }) => (
  <div
    style={{
      width: '100%',
      position: 'absolute',
      height: '100%',
    }}
  >
    {timelines.map(timeline => <Timeline key={timeline}>{timeline}</Timeline>)}
  </div>
);
