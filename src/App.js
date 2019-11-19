import React, { useState } from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useGithubLangs from './hooks/useGithubLangs';
import SearchBar from './components/SearchBar';
import FavouriteLang from './components/FavouriteLang';

const Page = styled.div`
  ${tw`flex-1`}
  ${tw`w-screen min-h-screen`}
  ${tw`bg-gray-700`}
`;

function App() {
  const [username, setUsername] = useState('');

  const api = useGithubLangs(username);

  return (
    <Page>
      <SearchBar username={username} onChangeHandler={setUsername} />
      <FavouriteLang api={api} />
    </Page>
  );
}

export default App;
