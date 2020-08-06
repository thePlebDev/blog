import React,{useState} from 'react';
import MainIndivDisplay from '../MainIndivDisplay'


const MainDisplay = ()=>{
  const [fakeState,setFakeState] = useState(
    [{title:'another',body:'this is indeed soemthing for the people'},
     {title:'THERE',body:'there is something in the water and it is looking at me'}])

  return(
    <div style={{width:'55%',margin:'0 auto'}}>
      <div>
          {
            fakeState.map((item,index)=>{
              return<MainIndivDisplay title={item.title} body={item.body} />
            })
          }
      </div>
    </div>
  )
}

export default MainDisplay
