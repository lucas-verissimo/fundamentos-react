import { useState } from "react"

const Mega = props => {
    const [numeros, setNum] = useState(Array(props.qtdNum).fill(0))

    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min) + min)
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array)
            : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNum)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
            .sort((a, b) => a - b)
        setNum(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
}
export default Mega