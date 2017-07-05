import React, { Component } from 'react'

import PrivateHeader from './PrivateHeader'
import NoteList from './NoteList'
import Editor from './Editor'

// Stateless functional component => ฟังก์ชันโง่ๆ
export default () => {
    return (
        <div>
            <PrivateHeader title='Dashboard' />
            <div className='page-content'>
                <NoteList />
                <Editor />
            </div>
        </div>
    )
}