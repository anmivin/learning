import React from "react";
import styled from "styled-components";
import { YMaps, Map, Placemark } from "react-yandex-maps";

  
/* const MapBlock = styled.div `


` */





function Mapp() {
    
    return (
        
           
            <YMaps>
              <div>
              <Map 
              defaultState={{ 
                center: [56.012420, 37.474915], zoom: 9, }} >
                  <Placemark geometry={[56.012420, 37.474915]} />
                </Map>
              </div>
            </YMaps>
          
        
        
       

        );
}

export default Mapp