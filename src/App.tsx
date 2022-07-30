import React from 'react'
import { Service } from './components/Service'
import { services } from './date/service'
import { Button } from './components/Button'

function App() {
  return (
    <div
      className="container
    "
    >
      <Service service={services[0]} />
      <Service service={services[1]} />
      <Service service={services[2]} />
    </div>
  )
}

export default App
