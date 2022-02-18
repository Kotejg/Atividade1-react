import React from 'react';
export default  () =>{ 

    function cadastrar() {
        console.log("cadastro feito!")
    }

    return( 
        <button onClick={cadastrar} ClassName="btn">
        Cadastrar!
        </button>
    );
    }
