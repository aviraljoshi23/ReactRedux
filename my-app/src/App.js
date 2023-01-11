import './App.css';
import { useSelector,useDispatch} from 'react-redux';
import {remove,add } from './MasterSlice';
import { useRef } from 'react';
function App() {
  const dispatch =  useDispatch();
  const countryField =  useRef('');
  const { data } = useSelector(state => state.master.value);
  const save= (e)=>{
    e.preventDefault();
    let countryName =  countryField.current.value;
    let obj = {
      name:countryName,
      flag:"https://cdn.britannica.com/42/3842-050-68EEE2C4/Flag-Russia.jpg"
    }
    dispatch(add(obj));
  }
  return (
    <div className="App">
      <div className='container-fluid'>
        <form onSubmit={save}>
          <input className='form-control' ref={countryField} type="text" placeholder='Enter Name'></input>
          <button className='btn btn-primary'>Submit</button>
        </form>
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Country Name</th>
              <th scope="col">Country Flag</th>
              <th scope="col"> Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) =>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{item.name}</td>
                  <td><img src={item.flag} style={{height:80,width:110}}></img></td>
                  <td> <button className='btn btn-danger' onClick={()=>dispatch(remove(index))}> Delete </button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
