
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Table from './component/Table/Table'
import Nav from './component/Nav/Nav';
import Analysis from './component/Analysis/index';
import './assets/styles/main.css';
import Side from './component/Side/index';
import Loading from './component/Loading/index';
document.addEventListener('click',(e)=>{
  if(!e.target.classList.contains('popup') && !e.target.classList.contains('bell')){
    let ele = document.getElementsByClassName('popup')[0];
    ele.classList.remove('d-block');
    ele.classList.add('d-none');
  }

})
function App() {
  return (
    <div className="App">
         <Loading></Loading>

       
      <div className="container-fluid ">
        <div className="mx-4">

        <Nav></Nav>
        <div className="row ">
          <div className="col-md-8">

          <Analysis></Analysis>

            <Table></Table>
          </div>
          <div className="col-md-4">
          <Side></Side>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default App
