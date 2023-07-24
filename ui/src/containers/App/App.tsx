import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/Home/Home';
import Header from 'components/Header/Header';
import Notification from 'components/Notification/Notification';
import { useAppSelector } from 'state_management/hooks';
import { AppState } from 'state_management/store';
import { useSelector } from 'react-redux';
import { PostPage } from 'components/PostPage/PostPage';

const App = (): JSX.Element => {
  const { postsList } = useAppSelector((state: AppState) => state.posts);
  const { open, message } = useSelector((state: any) => {
    return state.notification;
  });

  // Set the userId and userName value in session storage
  sessionStorage.setItem('userId', '953F411D-803A-45B0-A484-82DBFD394C07')
  sessionStorage.setItem('userName', 'Makenzie Hadiye')

  return (
    <>
      <Header logo="https://fastly.picsum.photos/id/859/60/60.jpg?hmac=8mrFP8lVWTD4KfttqwvkIORNYJMEA71Y_dYqOix3Q1I" />
      <Routes>
        <Route index element={<Home postsList={postsList} />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
      <Notification open={open} message={message} />
    </>
  );
};

export default App;
