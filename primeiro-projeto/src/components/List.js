import Item from './Item'
import ItemProps from './ItemProps'
function List ()
{
    return(
    <>
        <h1>Minha List</h1>
        <ul>
            <p>List</p>
            <li>Gol</li>
            <li>Uno</li>

            <p>Item</p>
            <Item marca = "Jeep"/>
            <Item marca = "Fox"/>

            <p>ItemProps</p>
            <ItemProps marca="Fusca" ano_lancamento = {1979}/>
            <ItemProps marca="Pollo" ano_lancamento = {1979}/> 
            <ItemProps />

        </ul>
    </>
    )
}

export default List