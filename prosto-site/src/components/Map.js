import React from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Wrapp = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  margin: auto;
`;

function Mapp() {
  return (
    <>
      <YMaps>
        <Wrapp>
          <Map
            width={'100%'}
            height={'100%'}
            defaultState={{
              center: [56.01242, 37.474915],
              zoom: 9,
            }}
          >
            <Placemark geometry={[56.01242, 37.474915]} />
          </Map>
        </Wrapp>
      </YMaps>
    </>
  );
}

export default Mapp;
