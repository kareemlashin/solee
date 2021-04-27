import React, { PureComponent } from 'react'
import ConfirmPopup from './../ConfirmPopup/index'

class Discord extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  openPopup = () => {
    this.setState({
      open: true,
    })
  }
  close = () => {
    this.setState({
      open: false,
    })
  }
  render() {
    return (
      <div className="DiscordWrapper">
        <div className="card__analysis my-3">
          <div className="row ">
            <div className="col-8 pr-1">
              <div className=" ">
                <h6>
                  <i className="fab fa-discord mr-2"></i>
                  Discord ID
                </h6>
                <div>antony#2142</div>
              </div>
            </div>
            <div className="col-4 px-1 ">
              <button className="Deactive w-100" onClick={this.openPopup}>
                Unbind
              </button>
            </div>
          </div>
        </div>

        {(() => {
          if (this.state.open) {
            return <ConfirmPopup close={this.close}></ConfirmPopup>
          }
        })()}
        
      </div>
    )
  }
}

export default Discord
