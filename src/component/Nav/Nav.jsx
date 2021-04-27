import React, { PureComponent } from 'react'
import user from './../../assets/img/user.jpg'

class Nav extends PureComponent {
  constructor(props) {
    super(props)
  }
  openNotification() {
    let ele = document.getElementById('notification-popup')
    ele.classList.add('d-block')
  }

  render() {
    return (
      <div className="NavWrapper ">
        <div className="py-3 d-flex justify-content-end vertical-align">
          <div>
            <div className="d-inline-block mr-3 position-relative vertical-align">
              <i
                className="fas fa-bell bell"
                onClick={() => {
                  this.openNotification()
                }}
              ></i>
            </div>

            <div className="d-inline-block vertical-align">
              <div className="d-inline-block vertical-align">
                <img src={user} alt="user" className="rounded-circle user" />
              </div>

              <div className="d-inline-block user__details px-2 vertical-align">
                <div className="pr-3">
                  <div>Anthony Mike</div>
                  <div className="email__user">anthony2142@email.com</div>
                  <i className="fas fa-chevron-down down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="notification-popup popup" id="notification-popup">
          <div className="">

          <div className="p-3">
            Notifications

            <div className="not-item row border-not">
              <div className="col-2 px-1">
                <span className="transfer ">
                  <i className="fas fa-check-circle "></i>
                </span>
              </div>
              <div className="col-10 px-1">
                <p className="p-0 m-0">
                  Transfer link confirmed by
                  <span>jamesconor@email.com</span>
                </p>
                <div className="time">Just Now</div>
              </div>
            </div>
            
            <div className="not-item row border-not">
              <div className="col-2 px-1">
                <span className="transfer ">
                  <i className="fas fa-check-circle "></i>
                </span>
              </div>
              <div className="col-10 px-1">
                <p className="p-0 m-0">
                  Transfer link confirmed by
                  <span>jamesconor@email.com</span>
                </p>
                <div className="time">Just Now</div>
              </div>
            </div>
            
            <div className="not-item row">
              <div className="col-2 px-1">
                <span className="confirm ">
                <i class="far fa-envelope"></i>
                                </span>
              </div>
              <div className="col-10 px-1">
                <p className="p-0 m-0">
                Confirmation email sent to 
                  <span>
                  anthony2142@email.com 
                
                </span>
                and
                <span>
                    jamesconor@email.com</span>
                </p>
                <div className="time">5 Min Ago</div>
              </div>
            </div>
            
            
            
          </div>
        </div>
        </div>

      </div>
    )
  }
}

export default Nav
