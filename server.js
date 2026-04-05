const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())

app.post('/api/upload', (req, res) => {
    const fileName = `chunk-${Date.now()}.webm`
    const writeStream = fs.createWriteStream(fileName)

    req.pipe(writeStream)

    req.on('end', () => {
        console.log("ACK saved:", fileName) // ✅ yaha likhna hai
        res.send('uploaded')
    })
})

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001")
})