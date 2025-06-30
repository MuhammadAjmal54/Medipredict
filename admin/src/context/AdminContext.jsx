import { useState } from "react";
import { createContext } from "react";
import React from 'react' 
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext= createContext()

const AdminContextProvider = (props) =>{

    const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [doctors,setDoctors] = useState([])
    const [appointments,setAppointments] = useState([])
    const [dashData,setDashData] = useState(false)

    const backendurl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {

        try {
            const {data} =await axios.post(backendurl + '/api/admin/all-doctors' , {}, {headers:{ atoken: aToken }})

            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailabilty = async (docId) =>{

        try {
            
            const {data} = await axios.post(backendurl + '/api/admin/change-availabilty', {docId}, {headers:{ atoken: aToken }})

            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }
    const getAllAppointments = async () => {

        try {
            
            const { data } = await axios.get(backendurl + '/api/admin/appointments', { headers: { atoken: aToken } })

            if (data.success){
                setAppointments(data.appointments)
                console.log(data.appointments)
            } else {
                toast.error(data.message)
                console.log(data.message)
            }

        } catch (error) {
             toast.error(error.message)
        }

    }

    const cancelAppointment = async (appointmentId) => {
        try {
            
            const {data} = await axios.post(backendurl + '/api/admin/cancel-appointment',{appointmentId}, { headers: { atoken: aToken } })

            if(data.success){
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
             toast.error(error.message)
        }
    }

    const getDashData = async () =>{

        try {
            
            const {data} = await axios.get(backendurl + '/api/admin/dashboard',{ headers: { atoken: aToken } })

            if (data.success){
                setDashData(data.dashData)
                console.log(data.dashData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
             toast.error(error.message)
        }
    }

    const value = {
        aToken,setAToken,
        backendurl,doctors,
        getAllDoctors,changeAvailabilty,
        appointments,setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData,setDashData,
        getDashData
    }

    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider