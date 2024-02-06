import {useState} from 'react';
import './App.css';

function App() {

  const[data, setData] = useState (Array(9).fill(''))
  const[move,setMove] = useState('X')

  const click =(n) =>{

    if (data[n] !== '') {
      alert('data is already difine')
      return
    }
    let a = [...data]
    a[n] = move;
    setData(a)
    if (move === 'X') {
      setMove('O')
    }
    else{
      setMove('X')
    }
    if (win(a)) {
      alert("winner")
      a.fill('');
      setData(a);
    }
    if (draw(a)) {
      alert("Match is draw.")
      a.fill('');
      setData(a);
    }
  }
  

  const draw = (data)=>{

    let count = 0;
   data.forEach(e=>{
    if(e !== ""){
      count++;
    }
   });
   if (count >= 9 ) {
    return true;
   }else{
    return false; 
   }
  }
  

  const win =(data)=>{
    const condition =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8], 
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ]
    let flag= false;
    condition.forEach( e => {
      if(data[e[0]]!=='' && data[e[1]] !== '' && data[e[2]] !==''){

      if (data[e[0]] === data[e[1]] && data[e[1]]===data[e[2]] ) {
         flag= true;
      }}
    })
    return flag;
  }
  return (
    <>
      <div>
        <h1 className="text-center"> Tic Tac Toe Game</h1>
        <table>
          <tbody>
            <tr>
              <td onClick={()=> click(0)}>{data[0]}</td>
              <td onClick={()=> click(1)}>{data[1]}</td>
              <td onClick={()=> click(2)}>{data[2]}</td>
            </tr>
            <tr>
              <td onClick={()=> click(3)}>{data[3]}</td>
              <td onClick={()=> click(4)}>{data[4]}</td>
              <td onClick={()=> click(5)}>{data[5]}</td>
            </tr>
            <tr>
              <td onClick={()=> click(6)}>{data[6]}</td>
              <td onClick={()=> click(7)}>{data[7]}</td>
              <td onClick={()=> click(8)}>{data[8]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
