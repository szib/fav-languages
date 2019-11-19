import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex flex-row justify-center`}
  ${tw`bg-gray-800 shadow`}
`;

const Input = styled.input`
  ${tw`text-lg bg-gray-900 text-gray-300`}
  ${tw`p-2 m-4 w-4/5`}
  ${tw`rounded outline-none`}
  ${tw`border-4 border-solid border-gray-500`}
`;

const SearchBar = ({ username, onChangeHandler }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Enter a github username"
        onChange={e => onChangeHandler(e.target.value)}
      ></Input>
    </Wrapper>
  );
};

export default SearchBar;
