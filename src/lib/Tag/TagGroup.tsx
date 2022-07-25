import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import styled from 'styled-components';
import Tag from './Tag';

export type Tags = { id: string; tagContent: string; color: string }[];

interface Props extends HTMLAttributes<HTMLDivElement> {
  tags: Tags;
  callback?: (tag: Tags) => void;
  setTag: Dispatch<SetStateAction<Tags>>;
  children?: React.ReactNode;
}
const TagGroupStyled = styled.div`
  display: inline-flex;
  gap: 2px;
`;
const TagGroup: React.FC<Props> = (props) => {
  const { children, tags, setTag, callback, ...rest } = props;
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
            closeable
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
