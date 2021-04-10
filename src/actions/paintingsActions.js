export const fetchPaintings = () => {
    return (dispatch) => {
        console.log("c")
        fetch('https://secure-dawn-14818.herokuapp.com/paintings')
        .then(resp => resp.json())
        .then(paintings => {
            console.log("d")
            dispatch({ type: 'FETCH_PAINTINGS', payload: paintings})
        })
    }
}



