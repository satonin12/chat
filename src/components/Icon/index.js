import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"
import * as icons from '../../icons/index'

const Icon = ({size = 20, name, className = ""}) => {
  const [width, height] = size instanceof Array ? size: [size, size]
  const [icon, viewBox] = icons[name]

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      dangerouslySetInnerHTML={{ __html: icon }}
      className={classNames('Icon', className)}
    />
  )
}

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}


export default Icon
