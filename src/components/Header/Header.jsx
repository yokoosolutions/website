import React, { Component } from 'react';
import headerMinerva from '../../imgs/headerMinerva.jpg';
import headerLogo from '../../imgs/headerLogo.png';
import styled, { css } from 'styled-components'
import Nav from '../Nav'
class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <ImageContainer url={headerMinerva}></ImageContainer>
                <FilterContainer></FilterContainer>
                <ContentContainer>
                    <HeaderInnerContainer>
                        <Nav />
                        <LogoContainer>
                            <img src={headerLogo} alt="header logo" width="275" />
                            <p>SOLUTIONS PROVIDER</p>
                            <div></div>
                            <p>Mission & Vision ></p>
                        </LogoContainer>
                    </HeaderInnerContainer>
                    <BottomLetters>
                        K O O
                    </BottomLetters>
                </ContentContainer>
            </HeaderContainer>
        );
    }
}

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    height: 700px;
    position:relative;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 1;
    position: absolute;
    z-index: 1;
    ${props => props.url && css`
          background: url(${props.url}) center top no-repeat;
    `};
`;

const FilterContainer = styled.div`
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.85);
    position: absolute;
    z-index: 2;
`;

const HeaderInnerContainer = styled.div`
    width: 980px;
    margin:0 auto;
`;

const ContentContainer = styled.div`
    width: 100%;
    height:100%;
    position: absolute;
    z-index: 3;
`;

const LogoContainer = styled.div`
    padding-top: 200px;
    p:nth-child(2) {
        color: #ccc;
        margin-left: 74px;
        margin-bottom:15px;
    }
    p:nth-child(4) {
        color: #fff;
        margin-left: 74px;
        margin-top: 10px;
        cursor: pointer;
    }
    div {
        width: 200px;
        height: 5px;
        background-color: #2299ff;
        margin-left: 74px;
    }
`;

const BottomLetters = styled.div`
    position:absolute;
    bottom:0;
    color: #fff;
    font-size: 100px;
    font-weight: bold;
    opacity: .3;
    margin-left: 30px;
`;