import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders Header with logo', () => {
  render(<Header logo="/logo.png" />);
  const logoElement = screen.getByAltText(/logo/i);
  const headerTitleElement = screen.getByText(/Travel Blog/i);
  expect(logoElement).toBeInTheDocument();
  expect(headerTitleElement).toBeInTheDocument();
});

test('renders Header without logo', () => {
  render(<Header logo="" />);
  const headerTitleElement = screen.getByText(/Travel Blog/i);
  expect(headerTitleElement).toBeInTheDocument();
});

test('navigates to home page when logo is clicked', () => {
  const navigateMock = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => navigateMock,
  }));

  render(<Header logo="/logo.png" />);
  const logoContainer = screen.getByAltText(/logo/i).closest('div') as HTMLDivElement;
  fireEvent.click(logoContainer);
  expect(navigateMock).toHaveBeenCalledWith('/');
});

test('displays user name', () => {
  jest.spyOn(window.sessionStorage.__proto__, 'getItem').mockReturnValueOnce('John');
  render(<Header logo="/logo.png" />);
  const userElement = screen.getByText(/John/i);
  expect(userElement).toBeInTheDocument();
});

test('displays "Login" if no user name is present', () => {
  jest.spyOn(window.sessionStorage.__proto__, 'getItem').mockReturnValueOnce(null);
  render(<Header logo="/logo.png" />);
  const userElement = screen.getByText(/Login/i);
  expect(userElement).toBeInTheDocument();
});
