import propTypes from 'prop-types'

const Button = ({onClick, showAdd}) => {

    return (
        <button className={showAdd ? 'btn-red' : 'btn-green'}  onClick={onClick}>
                {showAdd ? 'Close': 'Add'}
            </button>
    )
}


Button.propTypes = {
    onClick: propTypes.func,
}

export default Button
