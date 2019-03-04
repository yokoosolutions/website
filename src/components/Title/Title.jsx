import React, { Component } from 'react';
import styled from 'styled-components'

class Title extends Component {
    render() {
        return (
            <TitleContainer>
                <h2>{this.props.title}</h2>
                <BottomLine />
            </TitleContainer>
        );
    }
}

export default Title;

const TitleContainer = styled.div`
    margin-bottom: 20px;
    h2 {
        color: white;
        letter-spacing: 10px;
        font-size: 22px;
        margin-bottom: 10px;
    }
`;

const BottomLine = styled.div`
    width: 20%;
    border: solid 1px #1893d1;
`;