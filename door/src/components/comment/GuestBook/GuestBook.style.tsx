import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { css } from '@emotion/react';

export const GuestBookContainer = styled.div`
    padding: 3px;
    margin: 0px 30px
`

export const BtnBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

export const BtnStyle = css({
    width: '80px',
    backgroundColor: theme.colors.pointFont,
    color: 'white',
    fontSize: theme.fontSizes.sm
});
