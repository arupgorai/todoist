import React from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 1rem;
    color: var(--color-white);
    font-size: 1.2rem;
`;

const Logo = () => {
    return (
        <LogoWrapper>
            Todoist
        </LogoWrapper>
    )
}

export default Logo;
