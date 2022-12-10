import Item from './Item'
function List ()
{
    return(
    <>
        <p>Minha List</p>
        <ul>
            <li>Item 01</li>
            <li>Item 02</li>
            <Item marca = "Fragments 01"/>
            <Item marca = "Fragments 02"/>
        </ul>
    </>
    )
}

export default List