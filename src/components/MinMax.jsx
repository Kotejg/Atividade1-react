export default (props) => { 
    console.log(props); 
    console.log(props.min); 
    console.log(props.max);

    return <h2>O valor de {props.min} é maior que {props.max}.</h2>
}