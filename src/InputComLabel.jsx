import style from './InputComLabel.module.css'

function InputComLabel({idString, textLabel, children}) {
    return <>
        <label htmlFor={idString} className={style.texto}>{textLabel}</label>
        {children}
        <input type="text" id={idString} name={idString} />
    </>
}

export default InputComLabel