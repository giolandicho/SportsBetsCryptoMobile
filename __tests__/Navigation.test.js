import 'react-native';
import React from 'react';
import Navigation from '../src/navigation/Navigation';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Navigation />);
});
