const fetch = require('node-fetch')

const charactersController = {
    'list': async (req, res) => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(characters => {
                return res.json(characters)
                
            })
    }
   
}

module.exports = charactersController