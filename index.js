/**
 * Dependencies.
 */

import React from 'react'


/**
 * This is a simple description.
 *
 * @api public
 */

export default (props) => {
  //itms-apps
  return (
    <a href={'https://play.google.com/store/apps/details?id=' + props.id}>
      <img src="https://tether.github.io/react-download-android/badge.png"></img>
    </a>
  )
}
