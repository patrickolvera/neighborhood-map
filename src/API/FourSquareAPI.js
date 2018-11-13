const CLIENT_ID = "JBHUJ4BSO0IG20GD0LFSZGWP302KP4PFWGN52PCT52O4M3AF";
const CLIENT_SECRET = "ZM4S1DBF5Q0C43CBP1V41B0K3VFI1QNMN2HEQAZUDRKXE5J2";
const VERSION = "20181101";

export const getInfo = async (location) => {
    let url = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${location.position.lat},${location.position.lng}&intent=match&v=${VERSION}&query=${location.name}`;
    let headers = new Headers();
    let init = { method: 'GET',
                 headers: headers };
    let request = new Request(url, init);

    try {
        // request venu data
        let response = await fetch(request);
        let results = await response.json();
        let venu = results.response.venues[0];
        let imgUrl = `https://api.foursquare.com/v2/venues/${venu.id}/photos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;
        // request image data for venu
        let imgResponse = await fetch(imgUrl);
        let imgResults = await imgResponse.json();
        let imgData = imgResults.response.photos.items[0];
        let img = `${imgData.prefix}100x100${imgData.suffix}`;

        return img;
    } catch(e) {
        console.log('Error!', e)
    }
}

