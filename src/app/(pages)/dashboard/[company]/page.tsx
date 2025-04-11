import React from 'react'

const Dashboard =async ({params}:{params:Promise<{company:string}>}) => {
    const {company} = await params;
  return (

    <div>
        <h1>Company name: {company}</h1>
    </div>
  )
}

export default Dashboard