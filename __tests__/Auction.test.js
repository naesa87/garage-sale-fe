import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import {render} from 'react-dom';
import Auction from '../src/auctions/Auction.js'
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

jest.mock('react-dom');
describe('<Auction />', () => {

    const auction = {
                images: {
                    data: "empty.jpg"
                },
                price: '100',
                title: "TestTitle",
        serial_number: "1234",
                spec:  "TestSpec",
            location:  "TestLocation",
            condition: "Condition"
    };


    it('allows us to set all props', () => {
        const auctionWrapper = mount(<Auction params={auction}/>);
        expect(auctionWrapper.props().price).to.equal('100');
    });
});