import React from 'react'

const ApplicationHistory = ({profile}) => {
    console.log(profile)
  return (
    <div className=''>{
        profile && profile.map((application,index)=>(
            <>
                <div>
                    <p>{application}</p>
                </div>
            </>
        ))
    }</div>
  )
}

export default ApplicationHistory