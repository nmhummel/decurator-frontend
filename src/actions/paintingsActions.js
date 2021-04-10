export const fetchPaintings = () => {
    return (dispatch) => {
        console.log("c")
        fetch('https://git.heroku.com/secure-dawn-14818.git/paintings')
        .then(resp => resp.json())
        .then(paintings => {
            console.log("d")
            dispatch({ type: 'FETCH_PAINTINGS', payload: paintings})
        })
    }
}



