import React from 'react';
import { Room } from '../Room/Room';

export const RoomsList = ({ rooms }) => (
  <div style={{ background: 'green', position: 'absolute', height: '100%' }}>
    {rooms.map(room => <Room key={room}>{room}</Room>)}
  </div>
);
