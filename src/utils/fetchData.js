
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ddf1c19597msh56c637a5f2c9e37p160ecajsn3e59fb6c123f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;

}