import PropTypes from 'prop-types'

function Item02 ( {marca, ano_lancamento}){
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item02.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item02.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item02