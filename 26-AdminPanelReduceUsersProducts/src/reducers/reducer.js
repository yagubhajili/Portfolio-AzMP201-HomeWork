import React from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'setData':
            return { ...state, data: action.data }
        case 'setFakeStore':
            return { ...state, fakeStore: action.fakeStore }
        case 'setUser':
            return { ...state, userss: action.userss }
        default:
            break;
    }
}

export default reducer