import React from 'react';
import { Room } from '../Room/Room';

export const RoomsList = ({ rooms, floated }) => (
  <div
    style={{
      background: 'green',
      position: 'absolute',
      height: '100%',
      zIndex: '9',
    }}
  >
    {rooms.map(room => (
      <Room floated={floated} key={room}>
        {room}
      </Room>
    ))}
  </div>
);
