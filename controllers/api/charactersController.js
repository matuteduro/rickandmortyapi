const fetch = require('node-fetch')

const url = 'https://rickandmortyapi.com/api/character'

const apiCharactersController = {
    'list': async (req, res) => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(characters => {
                return res.status(200).json({
                    code:{
                        status: 200,
                        
                    

                    },
                    data: characters

                    })
                
            })
    },
    'detail': (req, res) =>
    fetch('https://rickandmortyapi.com/api/character/' + req.params.id)
    
    .then(response => response.json())
    .then(character => {
        return res.status(200).json({
            data:[ character],
                    })
                
            })
    }

    module.exports = apiCharactersController 
    
    
    // 