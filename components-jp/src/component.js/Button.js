function Button(props) {
    return <button onClick={props.btnClick}>{props.label}</button>;
}
export default Button;