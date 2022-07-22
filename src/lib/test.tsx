import React, { useState } from 'react';
import './test.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AppTest: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Buy eggs' },
    { id: 2, text: 'Pay bills' },
    { id: 3, text: 'Invite friends over' },
    { id: 4, text: 'Fix the TV' }
  ]);
  return (
    <div>
      <TransitionGroup>
        {items.map(({ id, text }) => (
          <CSSTransition key={id} timeout={500} classNames="item">
            <div>{text}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <button
        onClick={() => {
          setItems((state) => [
            ...state,
            {
              id: state.length + 1,
              text: Math.random().toString()
            }
          ]);
        }}
      >
        Add Item
      </button>
    </div>
  );
};
export default AppTest;
