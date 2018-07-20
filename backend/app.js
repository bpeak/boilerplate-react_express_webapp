const express = require('express')
const app = express()
const PORT = 80
app.listen(PORT, () => {
    console.log(`PORT ${PORT} CONNECTED SUCCESS`)
})

const path = require('path')

app.use('/public', express.static(path.join(__dirname, '../frontend/public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'))
})