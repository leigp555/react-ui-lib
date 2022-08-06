import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface ListItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  avatar: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
}
const ListItemStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > .avatar {
    align-self: start;
    display: inline-flex;
    align-items: center;
  }
  > .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > .ui-list-title {
      white-space: nowrap;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  > .actions {
    margin-left: auto;
    display: flex;
    gap: 10px;
  }
`;
const ListItem: React.FC<ListItemProps> = (props) => {
  const { avatar, title, description, actions, ...rest } = props;
  return (
    <ListItemStyled {...rest}>
      <div className="avatar">{avatar}</div>
      <div className="content">
        <div className="ui-list-title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="actions">{actions}</div>
    </ListItemStyled>
  );
};
ListItem.defaultProps = {
  actions: ''
};

export default ListItem;
