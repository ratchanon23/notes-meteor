import React from 'react'
import expect from 'expect'
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme'

import { NoteList } from './NoteList'

const notes = [
    {
        _id: 'noteId1',
        title: 'Test title',
        body: '',
        updatedAt: 0,
        userId: 'userId1'
    },
    {
        _id: 'noteId2',
        title: 'Test title 2',
        body: 'Blah Blah',
        updatedAt: 0,
        userId: 'userId2'
    }
]

if(Meteor.isClient) {
    describe('NoteList', function() {
        it('should render NoteListItem for each note', function() {
            const wrapper = mount(<NoteList notes={notes} />)

            expect(wrapper.find('NoteListItem').length).toBe(2)
            expect(wrapper.find('NoteListEmptyItem').length).toBe(0)
        })

        it('should render NoteListEmptyItem if zero note', function() {
            const wrapper = mount(<NoteList notes={[]} />)

            expect(wrapper.find('NoteListItem').length).toBe(0)
            expect(wrapper.find('NoteListEmptyItem').length).toBe(1)
        })
    })
}