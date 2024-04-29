export const reducer = (state, action) => {

    switch (action.type) {
        case 'setData':
            return { ...state, data: action.data }
        case 'setBasket':
            return { ...state, basket: action.basket }
        default:
            break;
    }

}