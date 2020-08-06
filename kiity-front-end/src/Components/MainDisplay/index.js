import React,{useState,useEffect} from 'react';

import MainIndivDisplay from '../MainIndivDisplay';
import useApi from '../../HOOKS/useApi.js';



const MainDisplay = ()=>{
  const [fakeState,setFakeState] = useState(
    [{title:'another',body:'this is indeed soemthing for the people'},
     {title:'THERE',body:'there is something in the water and it is looking at me'}])

  const {data,errors} = useApi('http://localhost:3000/all')

  return(
    <div style={{width:'55%',margin:'0 auto'}}>
      <div>
          {
            data ?
            data.map((item,index)=>{
              return<MainIndivDisplay key={item._id} title={item.title} body={item.body} />
            })
            :
            <div>nothing here</div>
          }

      </div>
    </div>
  )
}

export default MainDisplay
