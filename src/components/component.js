import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <span>
        {props.text ?? (
          <Fragment>
            <span className="component-text2">
              <span>{/*locale-text_XQfwjp*/}</span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

AppComponent.defaultProps = {
  text: undefined,
}

AppComponent.propTypes = {
  text: PropTypes.element,
}

export default AppComponent
