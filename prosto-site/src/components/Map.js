import React, { useState } from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Hearts } from 'react-loader-spinner';

const Wrapp = styled.div`
  width: 50vw;
  height: 50vh;

  margin: auto;
`;

function Mapp() {
  const [load, setLoad] = useState(true);

  return (
    <>
      <Wrapp>
        {load && <Hearts margin="auto" height="50%" width="50%" color="violet" visible={setLoad ? 'true' : 'false'} />}
        <YMaps>
          <Map
            onLoad={() => {
              setLoad(false);
            }}
            width={'100%'}
            height={'100%'}
            defaultState={{
              center: [56.01242, 37.474915],
              zoom: 9,
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
