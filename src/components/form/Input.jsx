import { useState } from "react";

const Input = props => {
    const [nome, setNome] = useState('Pedro')

    return (
        <>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </>
    )
}

export default Input;