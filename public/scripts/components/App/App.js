import React from 'react';

import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Scaleline } from '../Scaleline/Scaleline';
import { CalendarArea } from '../CalendarArea/CalendarArea';
import { RoomsArea } from '../RoomsArea/RoomsArea';
import { DiagrammArea } from '../DiagrammArea/DiagrammArea';
import { RoomsList } from '../RoomsList/RoomsList';
import { TimelinesList } from '../TimelinesList/TimelinesList';
import { Hour } from '../Hour/Hour';

import logo from '../../../logo.png';

// import { Slot } from '../Slot/Slot';
import { Button } from '../Button/Button';
// import { IconButton } from '../IconButton/IconButton';
// import { TextInput } from '../Input/TextInput';
// import { Tag } from '../Tag/Tag';
// import { Avatar } from '../Avatar/Avatar';
// import { Icon } from '../Icon/Icon';
// import { Title } from '../Typography/Title';
// import { Subtitle } from '../Typography/Subtitle';
// import { Modal } from '../Modal/Modal';
// import { Popup } from '../Popup/Popup';

export const App = () => (
  <Layout>
    <Header>
      <img src={logo} alt="logo" className="logo" />
      <Button type="button" primary>
        Создать встречу
      </Button>
    </Header>

    <Scaleline>
      {[
        '8:00',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
      ].map(hour => <Hour key={hour}>{hour}</Hour>)}
    </Scaleline>
    <Content>
      <CalendarArea>
        <RoomsArea>
          <RoomsList rooms={['Room1', 'Room2', 'Room3']} />
        </RoomsArea>
        <DiagrammArea>
          <TimelinesList timelines={['Timeline1', 'Timeline2', 'Timeline3']} />
        </DiagrammArea>
      </CalendarArea>
    </Content>
  </Layout>
);
