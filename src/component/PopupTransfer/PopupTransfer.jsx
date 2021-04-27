import React, { PureComponent } from 'react'
class PopupTransfer extends PureComponent {
  constructor(props) {
    super(props)
  }
  closePopup = (e) => {
    if (e.target.className === 'PopupTransfer') {
      document
        .getElementsByClassName('PopupTransfer')[0]
        .classList.add('remove')
      document
        .getElementsByClassName('PopupTransfer')[0]
        .classList.remove('d-flex')
      this.props.close()
    }
  }
  closePopupClose = () => {
    document.getElementsByClassName('PopupTransfer')[0].classList.add('remove')
    document
      .getElementsByClassName('PopupTransfer')[0]
      .classList.remove('d-flex')
    this.props.close()
  }

  render() {
    return (
      <div className="PopupTransferWrapper">
        <div
          className={'PopupTransfer'}
          id="Transfer"
          onClick={(e) => {
            this.closePopup(e)
          }}
        >
          <div className="box-transfer   ">
            <h6 className="mb-2 px-4 pt-3">Transfer</h6>
            <div className="px-4 pb-3">
              <label htmlFor="">Transfer To :</label>
              <div>
                {' '}
                <input
                  type="text"
                  className="w-100 rounded py-2"
                  placeholder="Enter the email address"
                />
              </div>
            </div>

            <div className="text-right py-4 base px-4">
              <button
                onClick={this.closePopupClose}
                className="Cancel mx-2 px-5 rounded py-2"
              >
                Cancel
              </button>
              <button
                onClick={this.closePopupClose}
                className="Send px-5 rounded py-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PopupTransfer
