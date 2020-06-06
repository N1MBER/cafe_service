import React from 'react';
import {
    Container,
    Header,
    Footer
} from 'native-base';

import AnatomyExample from './src/containers/MainPage';

const App = () => {
  return (
    <Container>
      <AnatomyExample />
    </Container>
  );
};

export default App;
