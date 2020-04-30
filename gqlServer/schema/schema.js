const express = require('express');

const app = express();

fetch("https://tripadvisor1.p.rapidapi.com/hotels/list?zff=4%252C6&offset=0&subcategory=hotel%252Cbb%252Cspecialty&hotel_class=1%252C2%252C3&currency=USD&amenities=beach%252Cbar_lounge%252Cairport_transportation&child_rm_ages=7%252C10&limit=30&checkin=2020-05-20&order=asc&lang=en_US&sort=recommended&nights=2&location_id=293919&adults=1&rooms=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "2f3a0e5559mshf0b9a7a94324ff7p1bf4dajsna06e1715474c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});