import React from 'react'
import Bg from '../Images/MainBg.jpg'

function DisplayUsers(props) {
    return (
        <>
           <div className="rounded-3xl overflow-hidden flex-1 shadow-xl max-w-xs my-3 bg-blue-500">
                <img src={Bg} className="w-full" alt={props.first_name} />
                <div className="flex justify-center -mt-8">
                    <img src={props.avatar} alt={props.first_name} className="rounded-full border-solid border-white border-2 -mt-6" />		
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-white text-sm bold font-sans">{props.first_name + " " + props.last_name}</h3>
                    <p className="mt-2 font-sans font-light text-white">{props.email}</p>
                </div>
            </div> 
        </>
    )
}

export default DisplayUsers
