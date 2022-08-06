import React from 'react';
import { Alert } from '../../lib';
import SuccessIcon from '../../lib/icons/success.svg';

export const Demo: React.FC = () => {
  return (
    <div className="Eg">
      <Alert type="success">
        <span>Success Text Lorem ipsum dolor</span>
      </Alert>
      <Alert type="info">
        <span>Info Text Lorem ipsum dolor</span>
      </Alert>
      <Alert type="warning">
        <span>Warning Text Lorem ipsum dolor</span>
      </Alert>
      <Alert type="error">
        <span>Error Text Lorem ipsum dolor</span>
      </Alert>
      <Alert type="error">
        <span>Success Text Lorem ipsum dolor</span>
      </Alert>
      <Alert defineIcon={<SuccessIcon width="1.5em" height="1.5em" />}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem blanditiis consequuntur
          corporis exercitationem ipsam, nihil nobis optio perspiciatis quas quibusdam repellendus,
          sequi voluptate! Deleniti fuga pariatur qui ratione voluptatibus!
        </span>
      </Alert>
      <Alert type="loading">
        <span>Success Text Lorem ipsum dolor</span>
      </Alert>
    </div>
  );
};
