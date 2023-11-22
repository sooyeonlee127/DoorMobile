import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MainImage = styled.img`
    width: 82%;
    margin: 0 auto;
    line-height: 0;
    z-index: 0;
    min-height: 80px;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: inset 0 0 0 1px var(--primary-bg-color);
`;
export const MainImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
