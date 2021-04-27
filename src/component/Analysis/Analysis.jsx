import React, { PureComponent } from 'react';

class Analysis extends PureComponent { 
  constructor(props) {
    super(props);

  }

  render () {
    
    return (
      <div className="AnalysisWrapper mb-2">
        <div className="row">
        <div className="col-md-3 px-2 mb-2 mx-auto">
            <div className="card__analysis position-relative">
              <h6>Filter By :</h6>
              <div className="Filter mt-2">
              <span>1D</span>
              <span>1M</span>
              <span>1Y</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-4_5 px-2 mb-2 mx-auto">
            <div className="card__analysis position-relative">
              <h6 className="">Total Checkouts</h6>
              <div className="Checkouts">72 <span>/82</span></div>
              <span className="cart shopping">
              <i class="fas fa-shopping-cart"></i>
              </span>

            </div>
          </div>
          
          <div className="col-md-4_5 px-2 mb-2 mx-auto">
            <div className="card__analysis position-relative">
              <h6 className="">Total Failure</h6>
              <div className=" Failure">10 <span>/82</span></div>
<span className="cart plus">
<i class="fas fa-cart-plus"></i>              </span>
              
            </div>
          </div>
          
        </div>

      </div>
    );
  }
}

Analysis.propTypes = {
  // bla: PropTypes.string,
};

Analysis.defaultProps = {
  // bla: 'test',
};

export default Analysis;
