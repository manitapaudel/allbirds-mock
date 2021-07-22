const Button = ({children, className}) => {
    return (
        <button className={`bg-white hover:bg-black hover:text-white py-3 px-10  font-bold uppercase rounded-sm ${className}`}>{children}</button>
    )
}

export default Button;