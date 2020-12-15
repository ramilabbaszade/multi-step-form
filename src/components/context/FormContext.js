import React, {createContext, useState} from 'react'
import App from '../../App'

export const FormContext = createContext()

const FormContextProvider = (props) => {
    const [state,setState] = useState([])
    return (
        <FormContext.Provider value={{state,setState}}>
            <App/>
        </FormContext.Provider>
    )
}

export default FormContextProvider
