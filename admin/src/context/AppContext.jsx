import { createContext } from "react";
import React from 'react' 

export const AppContext= createContext()

const AppContextProvider = (props) =>{

    const currency = '$'

    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }

      const months = ["","Jan", "Feb"," Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dataArray = slotDate.split('_')
    return dataArray[0]+ " " + months[Number(dataArray[1])] + " " + dataArray[2]
  }

    const value = {
        calculateAge,slotDateFormat,
        currency
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider