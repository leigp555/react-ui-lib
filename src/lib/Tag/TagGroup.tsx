import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import styled from 'styled-components';
import Tag from './Tag';

export type Tags = { id: string; tagContent: string; color: string; closeable?: boolean }[];

export interface TagGroupProps extends HTMLAttributes<HTMLDivElement> {
  tags: Tags;
  closeable: boolean;
  callback?: (tag: Tags) => void;
  setTag: Dispatch<SetStateAction<Tags>>;
  children?: React.ReactNode;
}
const TagGroupStyled = styled.div`
  display: inline-flex;
  gap: 2px;
`;
const TagGroup: React.FC<TagGroupProps> = (props) => {
  const { children, closeable, tags, setTag, callback, ...rest } = props;
  const close = (el: HTMLDivElement) => {
    const deleteId = el.getAttribute('data-id');
    setTag((state) => {
      const deleteTag = state.filter((item) => item.id === deleteId)[0];
      const deleteOrder = state.indexOf(deleteTag);
      state.splice(deleteOrder, 1);
      callback!(state);
      return state;
    });
  };
  return (
    <TagGroupStyled {...rest}>
      {tags.map((item) => {
        return (
          <Tag
            data-id={item.id}
            key={`${item.id + item.tagContent}`}
            color={item.color}
            callback={close}
            closeable={closeable || !!item.closeable}
          >
            {item.tagContent}
          </Tag>
        );
      })}
    </TagGroupStyled>
  );
};
TagGroup.defaultProps = {
  children: '',
  callback: () => {}
};

export default TagGroup;
