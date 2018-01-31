import React from 'react'
import Auction from '../src/auctions/Auction'
import {expect} from 'chai';
import {StaticRouter} from 'react-router-dom'

describe('Auction', () => {
    const auction = {
        images: {
            data: "empty.jpg"
        },
        price: '100',
        title: "TestTitle",
        serial_number: "1234",
        spec:  "TestSpec",
        location:  "TestLocation",
        condition: "Condition",
        id: 1
    };

    it('renders the auction', () => {
        const component = render(
        <StaticRouter> 
            <Auction auction={auction} key={auction.id}/> 
        </StaticRouter>);
        expect(component.text()).to.contain("TestTitle")
    });
});