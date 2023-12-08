import styled from "@emotion/styled";

export const PopupBackground = styled.div`
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export const PopupContainer = styled.div`
  background-color: #FFFFFF;
  min-width: 300px;
  min-height: 100px
`;

export const TopSection = styled.div`
    position: relative;
    display: flex;
    padding: 1rem;
    border-bottom: solid 0.3px;
    border-color: #CEB9B9

`

export const CloseIcon = styled.div`
    position: absolute;
    right: 1rem
`

export const FormSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: solid 0.3px;
    border-color: #CEB9B9
`


export const NameInput = styled.input`
    border: none;
    padding: 0 10px;
    width: calc(100% - 20px);
    height: 40px;
    color: #000;
    font-size: 16px;
    font-family: var(--font-gothic);
    letter-spacing: var(--font-gothic-spacing);
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    border-radius: none;
    -webkit-border-radius: 0;
    box-sizing: border-box;
    vertical-align: top;


`
export const ContentInput = styled.input`
`

export const PasswordInput = styled.input`
`