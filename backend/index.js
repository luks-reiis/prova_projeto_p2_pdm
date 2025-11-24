require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')

app.get('/imagem_do_dia', async (req, res) => {
  const nasaClient = axios.create({
      baseURL: 'https://api.nasa.gov',
      params: {
        api_key: process.env.NASA_KEY
      }
    })

    const result = await nasaClient.get('/planetary/apod', {
      params: {
        date: req.query.date //   parametro opcional
      }
    })

    res.json({
      titulo: result.data.title,
      data_imagem: result.data.date,
      url: result.data.url,
    })
})

const port = 3000
app.listen(port, () => console.log(`Porta backend: ${port}.`))
