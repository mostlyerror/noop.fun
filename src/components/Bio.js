import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Ben Poon`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
            Written by <strong>Ben Poon</strong> who lives and works in Denver,
              CO (trying) to <strike>break</strike> build useful things.{' '}
          <a href="https://twitter.com/mostly_error">
              Slide into the DMs
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
