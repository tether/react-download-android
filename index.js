/**
 * Dependencies.
 */

import React from 'react'


/**
 * This is a simple description.
 *
 * @param {Object} props
 * @api public
 */

export default (props) => {
  //itms-apps
  const title = props.title || 'Download Android application'
  return (
    <a href={'https://play.google.com/store/apps/details?id=' + props.id} aria-label={title}>
      <img src="https://tether.github.io/react-download-android/badge.png" title={title}></img>
    </a>
  )
}
