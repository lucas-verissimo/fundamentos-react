import './App.css';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega-sena/Mega'

const App = (props) =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#11 - Mega-Sena" color="#73503c">
                <Mega qtdNum={6}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#293e6a">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#9c0f5f">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#4298b5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional V2" color="#fa6900">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional V1" color="#e94c6f">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Componente com Repetição" color="#008bba">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#d96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parametro" color="#ff85cb">
                <ComParametro titulo="Esse é o titulo"
                    subtitulo="Esse é o subtitulo" />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#92b06a">
                <Primeiro />
            </Card>
        </div>
    </div>

export default App