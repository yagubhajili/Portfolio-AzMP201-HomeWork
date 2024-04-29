
const reducerInput = (state, action) => {
    switch (action.type) {
        case 'setFilteredData':
            return { ...state, filteredData: action.filteredData }
        case 'setSearchVal':
            return { ...state, searchVal: action.searchVal }
        default:
            break;
    }
}

export default reducerInput