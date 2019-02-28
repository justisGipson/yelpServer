let router = require('express').Router();
let axios = require('axios');

router.get('/', (req, res) => {
    let price = req.query.price;
    let location = req.query.location;
    let apiurl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&open_now=true';

    getFood = async () => {
        return axios.get(apiurl, {'headers': {'Authorization': 'Bearer ZH4_Y9CJp8Dbtg7pASdVeMDEB1MKnCh7x7eqLlz0MI6nvCJWOiHxiEbkyDXBFSGzdPULsSljT-3tdXVIBZTckb3Ais3yGj5tR3aeAYCqPTDT5mapmbDkuxJZ4t92XHYx'}, 'params': {'price': price, 'location': location}})
        .then((response) => {
            let all = response.data.businesses
            let min = 0;
            let max = all.length;
            let n = Math.floor(Math.random() * all.length);
            console.log(n)
            res.status(200).send(all[n]);
        }).catch((error) => {
            console.log(error)
        })
        }
    getFood();
}) 
module.exports = router;