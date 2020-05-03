import axios from 'axios';

//https://api.foursquare.com/v2/venues/explore?client_id=2M4RBXWUWEOKQ3LUNUL4DSYULKF2HUHONRW2BPYBX5XAF2FH&client_secret=2NFDDHSTTTLJYGMADG2EXS3GALDW4P5IYKXM1B333RRAXLFP&v=20180323&ll=40.7243,-74.0018&query=coffee

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx',
	},
});
