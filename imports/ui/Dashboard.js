import React, { Component } from 'react'

import PrivateHeader from './PrivateHeader'
import NoteList from './NoteList'
import Editor from './Editor'

// Stateless functional component => ฟังก์ชันโง่ๆ
export default () => {
    return (
        <div>
            <PrivateHeader title='Notes' />
            <div className='page-content'>
                <div className='page-content__sidebar'>
                    <NoteList />
                </div>
                <div className='page-content__main'>
                    <Editor />
                </div>
            </div>
        </div>
    )
}