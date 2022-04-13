import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export const Loading = () => {

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Bounce style={style}><p>Loading</p></Bounce>
    );
};