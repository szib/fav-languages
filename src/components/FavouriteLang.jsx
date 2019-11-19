import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex flex-row justify-center`}
  ${tw`text-2xl text-center text-gray-100`}
  ${tw`p-10`}
`;

const FavouriteLang = ({ api }) => {
  const { data, loading } = api;
  const { username, favoriteLanguage, error } = data;

  if (loading) return <Wrapper>Loading...</Wrapper>;
  if (error)
    return <Wrapper>{`Error: ${error.status} - ${error.message}`}</Wrapper>;

  if (!username)
    return (
      <Wrapper>
        Enter a github username and I will make guess what is their favourite
        language
      </Wrapper>
    );

  return (
    <Wrapper>
      {username &&
        favoriteLanguage &&
        `${username}'s favourite language is ${favoriteLanguage} `}
    </Wrapper>
  );
};

export default FavouriteLang;
