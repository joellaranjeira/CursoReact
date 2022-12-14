import PropTypes from 'prop-types'

function ItemProps ( {marca, ano_lancamento}){
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

ItemProps.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

ItemProps.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default ItemProps