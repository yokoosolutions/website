import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import clientsBg from '../../imgs/clients.png';
import Title from '../Title';

class Clients extends Component {
    render() {
        return (
            <ClientsContainer url={clientsBg}>
                <ClientsInnerContainer>
                    <Title title="OUR CLIENTS" />
                    <ClientsContent>
                        <Table>
                            <tbody>
                            <tr>
                                <th>SOFTTEK</th>
                                <th>EPAM</th>
                                <th>HERBALIFE</th>
                                <th>EA</th>
                            </tr>
                            <tr>
                                <th>SOFTTEK</th>
                                <th>EPAM</th>
                                <th>HERBALIFE</th>
                                <th>EA</th>
                            </tr>
                            <tr>
                                <th>SOFTTEK</th>
                                <th>EPAM</th>
                                <th>HERBALIFE</th>
                                <th>EA</th>
                            </tr>
                            </tbody>
                        </Table>
                        <Phylosophy>
                            <h3>
                                PHYLOSOPHY WITH CLIENTS
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sin
                            </p>
                        </Phylosophy>
                    </ClientsContent>
                </ClientsInnerContainer>
            </ClientsContainer>
        );
    }
}

export default Clients;

const ClientsContainer = styled.div`
    padding: 110px 0;
    width: 100%;
    background-size: cover;
    ${props => props.url && css`
          background: url(${props.url}) center top no-repeat;
    `};
`;

const ClientsInnerContainer = styled.div`
    width: 980px;
    margin: 0 auto;
`;

const ClientsContent = styled.div`


`;

const Table = styled.table`
    width: 100%;
    padding: 50px 0;
    text-align: center;
    color: #999;
    tr {
       height: 30px;
    }
`;

const Phylosophy = styled.div`
    text-align:center;
    color:#fff;
    > p {
        width: 50%;
        margin: 0 auto;
        color:#999;
        font-size:14px;
        padding-top: 12px;
        line-height:1.5;
    }
`;
