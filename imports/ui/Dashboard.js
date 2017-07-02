import React, { Component } from 'react'

import PrivateHeader from './PrivateHeader'

// Stateless functional component => ฟังก์ชันโง่ๆ
export default () => {
    return (
        <div>
            <PrivateHeader title='Your Links' />
            <div className='page-content'>
                Dashboard page content
            </div>
        </div>
    )
}