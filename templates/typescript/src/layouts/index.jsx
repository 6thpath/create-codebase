import React from 'react'

import './index.less'

class Layout extends React.PureComponent {
  render() {
    return (
      <div className='main-layout'>
        {this.props.children}
      </div>
    )
  }
}

export default Layout