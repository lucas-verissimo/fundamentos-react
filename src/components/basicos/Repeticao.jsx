import products from '../../data/products'

const Repeticao = props =>{

    function getProductsListItem() {
        return products.map(prod => {
            return <li key={prod.id}>
                {prod.id}-{prod.name}-&gt;R${prod.price}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}

export default Repeticao