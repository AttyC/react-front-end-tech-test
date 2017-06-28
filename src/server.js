import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const host = 'localhost'
const port = 3000

const errorReporter = (err) => {
  if (err) {
    console.info(err)
  }

  console.info('🚧  App is listening at http://localhost:3000')
}

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.listen(port, host, errorReporter)
