import React from 'react';
import { Timeline } from '../Timeline/Timeline';
import { Slot } from '../Slot/Slot';

const renderSlots = hours =>
  hours.map((hour, index) => (
    <Slot key={index} hours={hour}>
      +
    </Slot>
  ));

export const TimelinesList = ({ timelines }) => (
  <div
    style={{
      width: '100%',
      position: 'absolute',
      height: '100%',
      backgroundColor: '#F6F7F9',
    }}
  >
    {timelines.map(timeline => (
      <Timeline key={timeline}>
        {renderSlots([1, 2, 3, 1, 1, 1, 1, 1, 2, 2])}
      </Timeline>
    ))}
  </div>
);
