import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

// use appointment.jsx and show related doctor in appointment/doc_idd
const RelatedDoctor = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id != docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5 px-3 sm:px-0'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        key={index}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-lg'
                    >
                        <img className='w-full h-56 object-cover bg-blue-50' src={item.image} alt={item.name} />
                        <div className='p-4 text-center'>
                            <div className={`flex items-center justify-center gap-2 text-sm ${item.available ? ' text-green-500' : ' text-gray-500'}`}>
                                <div className={`w-3 h-3 ${item.available ? ' bg-green-500' : ' bg-gray-500'} rounded-full`}></div>
                                <p>{item.available ? 'Available' : 'Not Available'}</p>
                            </div>
                            <p className='text-gray-900 font-medium text-lg'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button to load more */}
            <button onClick={() => { navigate('doctors'); scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3  rounded-full mt-10'>More</button>
        </div>
    )
}

export default RelatedDoctor