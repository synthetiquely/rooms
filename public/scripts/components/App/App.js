import React from 'react';

// import { Slot } from '../Slot/Slot';
// import { Button } from '../Button/Button';
// import { IconButton } from '../IconButton/IconButton';
// import { TextInput } from '../Input/TextInput';
// import { Tag } from '../Tag/Tag';
// import { Avatar } from '../Avatar/Avatar';
// import { Icon } from '../Icon/Icon';
import { Title } from '../Typography/Title';
import { Subtitle } from '../Typography/Subtitle';

export const App = () => (
  <div>
    <Title>Прачечная</Title>
    <Subtitle>до 10 человек</Subtitle>
    <Title disabled>Оранжевый Апельсин</Title>
    <Subtitle disabled>до 10 человек</Subtitle>
  </div>
);
