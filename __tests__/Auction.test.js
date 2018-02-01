import React from 'react'
import Auction from '../src/auctions/Auction'
import {expect} from 'chai';
import {StaticRouter} from 'react-router-dom'

describe('Auction', () => {
    const auction = {
        images: {
            data: [
                {rawImageData: "data:image/jpeg;base64,/9j/garble1/2Q==", name: "image1.jpg", id: 7, auction_id: 1},
                {rawImageData: "data:image/jpeg;base64,/9j/garble2/2Q==", name: "image2.jpg", id: 8, auction_id: 1}
            ]
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
        <StaticRouter context={{needed:"forTest"}}>
            <Auction auction={auction} key={auction.id}/> 
        </StaticRouter>);
        expect(component.text()).to.contain("TestTitle")
    });
});
