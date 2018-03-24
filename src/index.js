import '@assets/favicon.ico'
import '@styles/styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Basket from './components/Basket'

/**
 * Welcome! This project has been setup with webpack to — hopefully —
 * just work. You should be able to write JS here and it will be compiled
 * into a file called "bundle.js", which is referenced in the
 * `public/index.html` file.
 *
 * You can either dump all your JS here, or organise it using import/export
 * as this build should fully support ES Modules.
 */

/**
 * Here's an example of importing an image (so webpack processes it)
 * This (as it's an image) will end up in the assets/images directory.
 */
import trump from '@images/trump.jpg'


/**
 * Want to use React? It's installed and ready to go. Just uncomment
 * the code below to get started...
 */


class App extends React.Component {
  render() {
    return (<div>Basket...  <Basket /></div>

  )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
