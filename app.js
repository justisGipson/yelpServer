let router = require('express').Router();
let axios = require('axios');

router.get('/', (req, res) => {
    let price = req.query.price;
    let location = req.query.location;
    let apiurl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&open_now=true';

    getRestaurants = async () => {
        try {
            return await axios.get()
        }
    }
})
