import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import { PrivateHeader } from './PrivateHeader'

if(Meteor.isClient) {
    describe('PrivateHeader', function() {
        it('should set button text to logout', function() {
            const wrapper = mount(
                <PrivateHeader title='Test title' handleLogout={() => {}} />
            )

            const buttonText = wrapper.find('.button').text()
            
            expect(buttonText.trim()).toBe('Logout')
        })

        it('should use title prop as h1 text', function() {
            const title = 'Test title here'
            const wrapper = mount(
                <PrivateHeader title={title} handleLogout={() => {}} />
            )

            const actualTitle = wrapper.find('h1').text()
            expect(actualTitle.trim()).toBe(title)
        })

        it('should call the function', function() {
            const spy = expect.createSpy()

            spy(3, 4, 123)
            spy('Ratchanon')
            expect(spy).toHaveBeenCalledWith('Ratchanon')
        })

        it('should call handleLogout on click', function() {
            const spy = expect.createSpy()
            const wrapper = mount(
                <PrivateHeader title='Test title' handleLogout={spy} />
            )

            wrapper.find('button').simulate('click')

            expect(spy).toHaveBeenCalled()
        })
    }) 
}