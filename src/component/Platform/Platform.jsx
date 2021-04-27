import React, { PureComponent } from 'react'
import Laptop from '../../assets/img/Laptop.png'

class Platform extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="PlatformWrapper">
        <div className="card__analysis my-3">
          <div className="row ">
            <div className="col-5 platformA text-center">
              <a href="">
                <div className="borderDesktop rounded text-center  px-2 pt-3 pb-2">
                  <img src={Laptop} className="w-100" alt="Laptop" />
                  <div className=" pb-0 mb-0">Desktop App</div>
                </div>
              </a>
            </div>
            <div className="col-7 platformA pl-1 d-flex justify-content-center align-items-center">
              <div className="w-100">
                <a className="w-100 mb-2 d-block platform mx-auto d-inline-block">
                  <i className="fab fa-apple mx-1"></i>
                  Download for MacOS
                </a>
                <a className="w-100 mt-1 d-block platform mx-auto d-inline-block">
                  <i className="fab fa-windows mx-1"></i>
                  Download for Windows
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Platform
