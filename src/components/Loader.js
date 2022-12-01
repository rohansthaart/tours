import React from "react";

import styled from "styled-components";

export default function Loader() {
  return (
    <Wrapper>
    <div className="page-100">

    <span className="loader"></span>
    </div>
   
    </Wrapper>
  );

}
const Wrapper = styled.main`
text-align: center;
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #031a5b;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  

    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

`


