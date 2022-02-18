import React from 'react'

export default props => {
    return (

        <React.Fragment>
             <h2>{props.principal}</h2>
             <h2>{props.secundario}</h2> 
        </React.Fragment> 
        /* 
        da para usar assim tambem
        <> 
              <React.Fragment>
                 <h2>{props.principal}</h2>
                 <h2>{props.secundario}</h2> 
             </React.Fragment> 
        </>
        
        */
    );
}