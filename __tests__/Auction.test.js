import React from 'react'
import { configure, render } from 'enzyme';
import Auction from '../src/auctions/Auction'
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

configure({ adapter: new Adapter() });

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
        const component = render(<Auction auction={auction} key={auction.id}/>);
        console.log(component.text())
        expect(component.text()).to.contain("TestTitle")
    });
});