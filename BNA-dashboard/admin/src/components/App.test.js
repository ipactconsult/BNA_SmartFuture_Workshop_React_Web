import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App'; // Adjusted the relative path

test('renders auth layout when visiting /auth/login', () => {
  window.history.pushState({}, 'Test page', '/auth/login');
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
