import React from 'react'

function Select({text, name, options, handlerOnChange, value}) {
  return (

    <div>

        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} onChange={handlerOnChange} style={{margin: '20px 0 40px 0'}}> 
            <option>Selecione..</option>
            {
                options.map((option) => {
                    return(
                        <option 
                            value={option.cod_turma} 
                            key={option.cod_turma}>
                                
                            {option.sigla}
                        </option>
                    )
                })
            }


        </select>
    </div>
  )
}

export default Select;