import React from 'react'

//component to display a notification to the user
const Notification = ( {showNotification} )  => {
    return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        <p>You have already entered this letter</p>
    </div>
       
    )
}

export default Notification
