import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex flex-row justify-center`}
  ${tw`text-2xl text-center text-gray-100`}
  ${tw`p-2`}
`;

const Ul = styled.ul`
  ${tw`text-gray-200 list-none`}
  padding-inline-start: 0;
`;

// TODO: make it nice
const List = ({ data }) => {
  const { languages } = data;
  if (!languages || languages.length === 0) return null;

  return (
    <Wrapper>
      <Ul>
        <h3>Languages</h3>
        {Object.entries(languages).map(entry => (
          <li key={entry[0]}>{`${entry[0]}: ${entry[1]}`}</li>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default List;
