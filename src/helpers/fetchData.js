/* eslint-disable no-undef */
export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        const data = await response.json()
        return {
            data,
            isLoading: false
        }
    } catch (err) {
        console.log(err);
    }
}