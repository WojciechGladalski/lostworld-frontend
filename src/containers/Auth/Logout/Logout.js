import React from 'react';

const logout = () => {
    console.log('logout method fired')
    localStorage.clear()
    window.location.href = '/'
};

export default logout;