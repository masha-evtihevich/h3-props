const Square = ({ className, label, width, height, colorSquare }) => {
    return (
        <div>
            <p
                className={className}
                style={{ width: width, height: height, background: colorSquare }}
            >
                {label}
            </p>
        </div>
    )
}

export default Square;