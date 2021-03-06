// Компоненту можно присваивать некоторые свойства, которые задаются извне - аналогично входным параметрам функций. 
// Благодаря пропсам можно делать настраиваемые компоненты и переиспользовать их код.
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