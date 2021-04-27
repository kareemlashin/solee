import React, { PureComponent } from 'react'
import PopupTransfer from './../PopupTransfer/index';

class Transfer extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      open:false
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
      <div className="TransferWrapper">
        <div className="card__analysis my-3">
          <h6 className="mb-3">
            <i className="fas fa-exchange-alt trans mr-2"></i>
            Transfer
          </h6>

          <div className="row ">
            <div className="col-8 pr-1">
              <div className=" ">
                <div className="Current">Current Email</div>
                <div>anthony2142@emaill.com</div>
              </div>
            </div>
            <div className="col-4 px-1">
              <button className="Deactive Transfer w-100" onClick={this.openPopup}>
                Transfer To <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        {(() => {
          if (this.state.open) {
            return <PopupTransfer close={this.close}></PopupTransfer>
          }
        })()}
      </div>
    )
  }
}

export default Transfer
