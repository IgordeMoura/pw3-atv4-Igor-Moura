function Input({type, text, name, placeholder, handlerOnChange, value}){
    return(

        <div>

            <label htmlFor={name} >{text}</label>
            <input style={{margin: '20px 0 50px 0'}}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handlerOnChange}
                value={value}
            />

        </div>

    )
}

export default Input;