import If from "./If"

const CondicionalComIf = props =>
    <div>
        <h2>O número {props.numero} é:</h2>
        <If test={props.numero % 2 === 0}>
            <span>Par</span>
        </If>
        <If test={props.numero % 2 === 1}>
            <span>Ímpar</span>
        </If>
    </div>

export default CondicionalComIf