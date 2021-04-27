import React, { PureComponent } from 'react';
import ConfirmPopup from './../ConfirmPopup/index';

class License extends PureComponent { 
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

  render () {
    return (
      <div className="LicenseWrapper">
        <div className="card__analysis">
          <p className="License mb-0 pb-0">License key</p>
          <div>
            xxxx-xxxx-xxxx-xxxx
            <span className="eye float-right">
              <i className="far fa-eye-slash  "></i>
            </span>
          </div>

          <div className="row mt-4">
            <div className="col-8 pr-1">
              <div className="w-100 d-flex align-items-center Stripe">
                <div className="clearfix w-100 px-2">
                  Renew Now
                  <span className="  d-inline-block StripeX">Stripe</span>
                </div>
              </div>
            </div>
            <div className="col-4 px-1">
              <button className="Deactive w-100" onClick={this.openPopup}>Deactive</button>
            </div>
          </div>
          <span className="Renewal">Next Renewal on 22 Mar 2021</span>
        </div>
        {(() => {
          if (this.state.open) {
            return <ConfirmPopup close={this.close}></ConfirmPopup>
          }
        })()}
        
      </div>
    );
  }
}


export default License;
