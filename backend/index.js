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

app.get('/busca', async (req, res) => {
  const nasaClient = axios.create({
      baseURL: 'https://images-api.nasa.gov/'
    })

    const result = await nasaClient.get('/search', {
      params: {
        q: req.query.termo,
        media_type: 'image',
        year_start: req.query.ano,
        year_end: req.query.ano
      }
    })

    const items = result.data.collection.items

    let images = items.map(item => ({
      titulo: item.data[0].title,
      data_imagem: item.data[0].date_created,
      url: item.links[0].href
    }))

    images = images.filter((item, index) => index < 10)

    res.json({ images })
})

const port = 3000
app.listen(port, () => console.log(`Porta backend: ${port}.`))
