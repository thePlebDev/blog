import React from 'react';

import MainIndivDisplay from '../MainIndivDisplay';




const MainDisplay = ({state})=>{
  return(
    <div style={{width:'55%',margin:'0 auto'}}>
      <div>
          {

            state ?
            state.map((item,index)=>{
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
