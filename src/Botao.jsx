import style from './Botao.module.css' 

function Botao({textButton}){
    return <>
        <button>{textButton}</button>
        <button className={style.texto}>Teste do module</button>      
    </>
}

function NewText({text}){
    return <>
        <div>Adicionado um novo texto!</div>
    </>
}

export default Botao
export {NewText}