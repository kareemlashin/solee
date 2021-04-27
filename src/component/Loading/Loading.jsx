import React, { PureComponent } from 'react';

class Loading extends PureComponent { 
  constructor(props) {
    super(props);
    this.state={
      loading:true
    }
  }

  componentDidMount=()=> {
    setTimeout(() => {
      this.setState({
        loading:false

      })
        
    }, 1500);
  }
  

  render () {
    
    return (
      <div className="LoadingWrapper">
        {
          
          (
            ()=>{
              if (this.state.loading) {
                return(
                  <div className="loading">

                  <div class="loaders">
                          <div class="loader google-loader">
                              <div class="google-loader-bar"></div>
                              <div class="google-loader-bar"></div>
                              <div class="google-loader-bar"></div>
                              <div class="google-loader-bar"></div>
                          </div>
                  
                          
                      </div>
                      </div>
                  
                )
              }else{
                return;
              }
            }
          )()
        }

      </div>
    );
  }
}


export default Loading;
