import React from "react";
import styled from "styled-components";
import pic from './img/pic.jpg'
import profpic from './img/profpic.jpg'
const Container = styled.div `
display: flex;
justify-content:space-between;
background-color: blue;

border: solid black 3px;


`

const MainSec = styled.div `
width: 60%
heigth: 600px;
border: solid white 3px;

`

const SideSec = styled.div `
border: solid white 3px;

`


function Main() {
    return (
        <>
            <Container>
                <MainSec> Main
                    <div>
                        <div>
                            <img src={pic} alt="pic"/>
                        </div>
                        <div></div>
                        <div></div>
                     </div>
                </MainSec>
                < SideSec>
                    <div> Side
                        <div>
                            <img src={profpic} width="200px" height="200px" alt="profpic"/>
                        </div>
                        <div>Navi 
                            <div>Lorem</div>
                            <div>Ipsum</div>



                        </div>
                        <div></div>
                    </div>
                </SideSec>
        
            </Container>
        </>

        );
}

export default Main