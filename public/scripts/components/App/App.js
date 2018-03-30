import React from 'react';

// import { Slot } from '../Slot/Slot';
// import { Button } from '../Button/Button';
// import { IconButton } from '../IconButton/IconButton';
// import { TextInput } from '../Input/TextInput';
import { Tag } from '../Tag/Tag';
import { Avatar } from '../Avatar/Avatar';
import { Icon } from '../Icon/Icon';

export const App = () => (
  <div>
    <Tag>
      <Avatar
        size="medium"
        src="https://avatars0.githubusercontent.com/u/1813468?s=460&v=4"
      />
      Лекс Лютер
      <Icon type="close" />
    </Tag>
  </div>
);
