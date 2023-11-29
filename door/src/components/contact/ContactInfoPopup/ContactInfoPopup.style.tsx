import styled from "@emotion/styled";


export const PopupBackground = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,0.4);
    overflow: auto;
`

export const Popup = styled.div`
    position: fixed; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    overflow-y: auto;
`