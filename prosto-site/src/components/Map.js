import React, { useState } from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Hearts } from 'react-loader-spinner';

const Wrapp = styled.div`
  width: 70vw;
  height: 70vh;
  margin: auto;
`;
const LoaderWrapp = styled.div`
  margin: auto;
  width: 70vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Mapp() {
  const [load, setLoad] = useState(true);

  return (
    <>
      {load && (
        <LoaderWrapp>
          <Hearts height="50%" width="50%" color="violet" visible={setLoad ? 'true' : 'false'} />
        </LoaderWrapp>
      )}
      <Wrapp>
        <YMaps>
          <Map
            onLoad={() => {
              setLoad(false);
            }}
            width={'100%'}
            height={'100%'}
            defaultState={{
              center: [56.01242, 37.474915],
              zoom: 12,
            }}
          >
            <Placemark geometry={[56.01242, 37.474915]} />
          </Map>
        </YMaps>
      </Wrapp>
    </>
  );
}

export default Mapp;
