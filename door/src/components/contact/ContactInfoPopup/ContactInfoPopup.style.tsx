import styled from "@emotion/styled";

export const PopupBackground = styled.div`
    position: fixed;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
    opacity: 1;
`
export const PopupBackgroundClick = styled.div`
    width: 100%;
    min-height: 100%;
    height: auto;
`

export const PopupBox = styled.div`
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
`
export const Popup = styled.div`
    top: 115px;
    left: 10px;
    width: 119.85px;
    height: auto;
`

export const PopupContent = styled.div`
    display: flex;
    text-align: left;
    background: var(--primary-bg-color);
`