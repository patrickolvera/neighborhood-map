const CLIENT_ID = "Q24T53YRCYH4TV01E0IWNVM2WNR2YAN1QF4J5BZTGWQBGDET";
const CLIENT_SECRET = "OWWECDZKHSA4DZSDDR11UZWWXIK2MLV0BGPUE1PZDT3NYNKA";
const VERSION = "20181101";

// Handles API Request
export const getInfo = async (location) => {
    const url = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${location.position.lat},${location.position.lng}&intent=match&v=${VERSION}&query=${location.name}`;
    const headers = new Headers();
    const init = { method: 'GET',
                 headers: headers };
    const request = new Request(url, init);

    try {
        // request venu data
        const response = await fetch(request);
        const results = await response.json();
        const venu = results.response.venues[0];
        const imgUrl = `https://api.foursquare.com/v2/venues/${venu.id}/photos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;
        // request image data for venu
        const imgResponse = await fetch(imgUrl);
        const imgResults = await imgResponse.json();
        const imgData = imgResults.response.photos.items[0];
        const img = `${imgData.prefix}100x100${imgData.suffix}`;

        return img;
    } catch(e) {
        console.log('Error! ', e)
    }
}

