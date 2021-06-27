export const getData = async (link) => {
    let response = await fetch(link, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5f5f6090c6mshe3c64a00c80ba71p1cc3c8jsna5ca7e5362ef",
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
        }
    })

    return response.json()
}