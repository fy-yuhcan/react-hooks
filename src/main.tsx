import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserCard } from './components/UserCard.tsx';
import { useAllUsers } from './hooks/useAllUsers';

const App: React.FC = () => {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => {
    getUsers();
  };

  return (
    <div>
      <button onClick={onClickFetchUser}>データ取得</button>
      {error ? (
        <p>データ取得ミス</p>
      ) : loading ? (
        <p>Loding...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
