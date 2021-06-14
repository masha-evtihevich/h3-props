const Square = ({ className, label }) => {
    return (
        <div>
            <p
                className={className}
            >
                {label}
            </p>
        </div>
    )
}

export default Square;