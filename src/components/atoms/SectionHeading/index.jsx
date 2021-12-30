
const SectionHeading = ({children, className}) => {
    return (
        <h2 className={`font-bold font-mono text-3xl mb-5 ${className}`}>{children}</h2>
    )
}

export default SectionHeading