const Sub = props => {

    function acao() {
        props.onClicar(Math.random(), 'Nº gerado');
    };

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
};

export default Sub