import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import misionBg from '../../imgs/misionBg.png';

class Mision extends Component {
    render() {
        return (
            <MisionContainer>
                <MisionInnerContainer url={misionBg}>
                    <MisionInnerContainerContent>
                        <MissionTitle><span>MISION</span> VISION</MissionTitle>
                        <MissionContent>
                            <p><span>MISION</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Separator></Separator>
                            <p><span>VISION</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </MissionContent>
                    </MisionInnerContainerContent>
                </MisionInnerContainer>
            </MisionContainer>
        );
    }
}

export default Mision;

const MisionContainer = styled.div`
    padding: 90px 0;
    width: 100%;
`;

const MisionInnerContainer = styled.div`
    background-size: cover;
    ${props => props.url && css`
          background: url(${props.url}) center center no-repeat;
    `};
`;


const MisionInnerContainerContent = styled.div`
    width: 980px;
    margin: 0 auto;
    padding: 50px 0;
`;

const MissionTitle = styled.h1`
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 40px;
    letter-spacing: 15px;
    span {
        color: #1893d1;
        font-size: 40px;
        margin-right: 10px;
        letter-spacing: 15px;
    }
`;


const MissionContent = styled.div`
    width: 70%;
    p {
        font-size: 14px;
        margin-bottom: 30px;
        color: #999;
        >span {
            color: #1893d1;
        }
    }
`;

const Separator = styled.div`
    width: 40%;
    border-top: solid #dedede 1px;
    margin-bottom: 30px;
`;