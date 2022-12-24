import React, { CSSProperties, FC } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  style: CSSProperties;
  closeButton?: boolean;
  children: JSX.Element;
}

const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {
  return (
    <CreateMenu onClick={onCloseModal}>
      <div>menu</div>
      {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
      {children}
    </CreateMenu>
  );
};

export default Menu;
