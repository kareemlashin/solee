import React, { PureComponent } from 'react'

class ConfirmPopup extends PureComponent {
  constructor(props) {
    super(props)
  }
  closePopup = (e) => {
    if (e.target.className === 'ConfirmPopup') {
      document.getElementsByClassName('ConfirmPopup')[0].classList.add('remove')
      document
        .getElementsByClassName('ConfirmPopup')[0]
        .classList.remove('d-flex')
      this.props.close()
    }
  }
  closePopupClose = () => {
    document.getElementsByClassName('ConfirmPopup')[0].classList.add('remove')
    document
      .getElementsByClassName('ConfirmPopup')[0]
      .classList.remove('d-flex')
    this.props.close()
  }
  
  render() {
    return (
      <div className="ConfirmPopupWrapper">
        <div
          className={'ConfirmPopup'}
          id="Confirm"
          onClick={(e) => {
            this.closePopup(e)
          }}
        >
          <div className="box-popup position-relative text-center px-5 py-4">
            <i
              className="fas fa-times close-all"
              onClick={this.closePopupClose}
            ></i>
            <span className="sheet mt-5 mx-auto">
              <i className="far fa-file-alt"></i>
            </span>

            <h6 className="my-3">Confirmation Email Sent</h6>
            <p>
              We sent a link to
              <a href="mailto:anthony2142@email.com"> anthony2142@email.com</a>
              and
              <a href="mailto:anthony2142@email.com">jamesconor@email.com</a>.
              Check the email to confirm the transfer.
            </p>
            <a className="a-did" href="mailto:anthony2142@email.com">
              Didn’t get a confirmation email?
            </a>
            <div>
              Check your spam or
              <a href="mailto:anthony2142@email.com"> Send Again</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmPopup
