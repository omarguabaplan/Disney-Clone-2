import React from 'react';
import styled from 'styled-components';
import {Example}  from './Slider';

export default function Home() {
  return (
    <Container>

    <Example >

      </Example>

    </Container>
  );
}




const Container = styled.div`
padding: 0px calc(3.5vw * 5px);
min-height: calc(100% - 70px);
z-index: 10;

Example {


  z-index: 1;
}

`;

