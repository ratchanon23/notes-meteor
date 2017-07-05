import React from 'react'
import expect from 'expect' 
import { mount } from 'enzyme'

import NoteListItem from './NoteListItem'

if(Meteor.isClient) {
    describe('NoteListItem', function() {
        it('should render title and timestamp', function() {
            const title = 'My title'
            const updatedAt = 1499228532742
            const wrapper = mount(<NoteListItem note={{title, updatedAt}} />)

            expect(wrapper.find('h5').text().trim()).toBe(title)
            expect(wrapper.find('p').text()).toBe('7/05/2017')
        })

        it('should set default title if no title set', function() {
            const title = ''
            const updatedAt = 1499228532742
            const wrapper = mount(<NoteListItem note={{title, updatedAt}} />)

            expect(wrapper.find('h5').text().trim()).toBe('Untitled note')
        })
    })
}