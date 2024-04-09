import InputComLabel from "./InputComLabel"
import Botao from "./Botao"
import NavegacaoHeader from './NavegacaoHeader'
import { NewText } from "./Botao"
import './App.css'

function App() {
  const eslizarBotao = {
    color: 'blue',
    backgroundColor: 'yellow',
    padding: '8px',
    borderRadius: '8px'
  }
  return <>
    <NavegacaoHeader nav1='click1' nav2='click2' nav3='click3' />
    <h1>Primeiro Projeto React</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae dolorem voluptatem magni exercitationem quibusdam voluptate ex tenetur quas nobis hic, tempore autem ut. Officia commodi harum omnis hic doloribus?</p>
    <Botao textButton='Botão' /><br />
    <NewText />
    <Botao textButton='Botão' /><br />
    <NewText />
    <Botao textButton='Botão' /><br />
    <NewText />
    <button style={ {backgroundColor:'lightblue', color:'red', borderRadius: '8px', padding: '10px'} }>Botão Avulso1</button>
    <button style={ eslizarBotao }>Botão Avulso2</button>
    <div><a href="">link1</a></div> 
    <div><a href="">link2</a></div> 
    <div><a href="">link3</a></div> 
    <InputComLabel idString='name' textLabel='Name:' >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam ullam iure harum fugit quam minima tempore cupiditate id. Temporibus quia officiis dignissimos itaque reiciendis molestias rem modi tempora. Odit fugit fugiat quam minus ipsum est nostrum qui. Perferendis excepturi fuga obcaecati aliquam voluptates omnis officia sequi nobis vel exercitationem.</p>
    </InputComLabel> <br />
    <InputComLabel idString='idade' textLabel='Idade:' /><br />
    <InputComLabel idString='endereco' textLabel='Endereço:' /><br />
  </>
}

export default App
