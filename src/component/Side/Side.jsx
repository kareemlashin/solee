import React, { PureComponent } from 'react'
import License from './../License/License'
import Discord from './../Discord/index'
import Transfer from './../Transfer/Transfer'
import Platform from './../Platform/index'

class Side extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="SideWrapper">
        <License></License>

        <Discord></Discord>
        <Transfer></Transfer>
        <Platform></Platform>
      </div>
    )
  }
}

export default Side
