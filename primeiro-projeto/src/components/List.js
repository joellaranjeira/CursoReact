import Item01 from './Item01'
import Item02 from './Item02'
function List ()
{
    return(
    <>
        <h1>Minha Lista - List</h1>
        <ul>
            <p>List</p>
            <li>Gol</li>
            <li>Uno</li>

            <p>Item - Item01</p>
            <Item01 marca = "Jeep"/>
            <Item01 marca = "Fox"/>

            <p>ItemProps - Item02 </p>
            <Item02 marca="Fusca" ano_lancamento = {1979}/>
            <Item02 marca="Pollo" ano_lancamento = {1979}/> 
            <Item02 />

        </ul>
    </>
    )
}

export default List