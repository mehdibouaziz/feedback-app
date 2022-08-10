import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <h1>About this project</h1>
        <p>This is a React app to leave a feedback. Created to complete a udemy course: React front to back 2022 by Brad Traversy</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage