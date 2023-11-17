import React, { Component } from 'react'
import './App.css'
import largeImage from './medium-image.jpg'
import lightImage from './light-image.png'

class App extends Component {
  // Mauvaise pratique 4 : Boucles imbriquées
  generateMultiplicationTable() {
    let table = []
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        table.push(
          <p key={`${i}-${j}`}>
            {i} x {j} = {i * j}
          </p>
        )
      }
    }
    return table
  }

  blockMainThread() {
    // Mauvaise pratique 1. : Blocage du thread principal
    let start = Date.now()
    while (Date.now() < start + 500) {
      // nothing
    }
  }

  render() {
    this.blockMainThread()
    return (
      <div className="App">
        <h1>Projet React avec Mauvaises Pratiques</h1>

        {/* <redirect to="/" /> */}

        {/* Mauvaise pratique : Animation CSS inefficace */}
        <div
          style={{
            position: 'absolute',
            animation: 'inefficientAnimation 5s infinite'
          }}
        >
          Texte avec animation inefficace
        </div>

        {/* Mauvaise pratique 2 : Utilisation de CSS de polices supplémentaires */}
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          Texte avec police supplémentaire
        </p>

        {/* Mauvaise pratique 1 : Utilisation d'animations CSS */}
        <div
          className="animated"
          style={{ animation: 'infiniteSpin 5s infinite' }}
        >
          Texte avec animation
        </div>

        {/* Mauvaise pratique 5 : Redimensionnement d'images en HTML */}
        <img
          src={largeImage}
          alt="Large"
          className="large-image"
          style={{ width: '400px', height: '300px' }}
        />
        <img
          src={largeImage}
          alt="Large"
          className="large-image"
          style={{ width: '400px', height: '300px' }}
        />
        <img
          src={largeImage}
          alt="Large"
          className="large-image"
          style={{ width: '400px', height: '300px' }}
        />

        <img
          src={lightImage}
          alt="Large"
          className="large-image"
          style={{ width: '400px', height: '300px' }}
        />
        <img
          src={lightImage}
          alt="Large"
          className="large-image"
          style={{ width: '400px', height: '300px' }}
        />
        <img
          src={lightImage}
          alt="Large"
          className="large-image"
          style={{ width: '400px', height: '300px' }}
        />

        {/* Mauvaise pratique 2. : unsized-images */}
        {/* Mauvaise pratique 4. : uses-optimized-images */}
        <img src={largeImage} alt="Large unsized" />
        <img src={largeImage} alt="Large unsized" />
        <img src={largeImage} alt="Large unsized" />

        <img src={lightImage} alt="Large unsized" />
        <img src={lightImage} alt="Large unsized" />
        <img src={lightImage} alt="Large unsized" />

        {/* Mauvaise pratique 3. : offscreen-images */}
        <img
          src={largeImage}
          alt="Description"
          style={{ position: 'absolute', left: '-9999px' }}
        />
        <img
          src={largeImage}
          alt="Description"
          style={{ position: 'absolute', left: '-9999px' }}
        />
        <img
          src={largeImage}
          alt="Description"
          style={{ position: 'absolute', left: '-9999px' }}
        />
        <img
          src={lightImage}
          alt="Description"
          style={{ position: 'absolute', left: '-9999px' }}
        />
        <img
          src={lightImage}
          alt="Description"
          style={{ position: 'absolute', left: '-9999px' }}
        />
        <img
          src={lightImage}
          alt="Description"
          style={{ position: 'absolute', left: '-9999px' }}
        />

        {/* Mauvaise pratique 5. : uses-responsive-images */}
        <img
          src={largeImage}
          alt="Non-responsive"
          style={{ width: '800px', height: '600px' }}
        />
        <img
          src={largeImage}
          alt="Non-responsive"
          style={{ width: '800px', height: '600px' }}
        />
        <img
          src={largeImage}
          alt="Non-responsive"
          style={{ width: '800px', height: '600px' }}
        />

        <img
          src={lightImage}
          alt="Non-responsive"
          style={{ width: '800px', height: '600px' }}
        />
        <img
          src={lightImage}
          alt="Non-responsive"
          style={{ width: '800px', height: '600px' }}
        />
        <img
          src={lightImage}
          alt="Non-responsive"
          style={{ width: '800px', height: '600px' }}
        />

        {/* Mauvaise pratique 4 : Boucles imbriquées */}
        {this.generateMultiplicationTable()}
        {this.generateMultiplicationTable()}
        {this.generateMultiplicationTable()}
      </div>
    )
  }
}

export default App
