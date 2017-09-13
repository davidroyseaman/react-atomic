import React from 'react';
import { TestPage } from './organisms/TestPage.jsx';
import { Heading } from './atoms/Heading.jsx';

export const Application = () => (
  <div>
    <Heading text='Application level heading' />
    <TestPage />
  </div>
);
