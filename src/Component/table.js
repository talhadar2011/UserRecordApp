import React from 'react'
export default function table(props) {
    return (
        <div>
            <table className="table table-striped">
                    <thead>
                        <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th scope="col">Opertations</th>

                        </tr>
                    </thead>
                    <tbody>
                      
                    { 
                    props.users.map(user =>
                        <> 
                <tr 
                
                key={user.id}>
                    
                    <th scope="row">
                    {/* {user.id} */}
                    {user.name}
                    </th>
                    
                    <td>
                    {user.username}
                    </td>
                    <td>
                    {user.email}
                    </td>
                    <td>
                    {user.website}
                    </td> 
                    <td>
                        <div className="row">
                        <div className="col-md-4">
                        <button
                         type="button"
                         data-toggle="modal" 
                         data-target="#staticBackdrop"
                         className="btn btn-primary btn-lg"
                         onClick={()=>props.getRecord(user.username)}
                        >Edit</button> 
                            </div>
                            <div className="col-md-4">
                        <button className="btn btn-danger btn-lg"
                        type="button"
                        data-toggle="modal" 
                        onClick={()=>props.deleteRecord(user.username)}
                        >Delete</button> 
                            </div>
                            
                        </div>                      
                    </td>
                    </tr>
                    
                    
                        </>              
                )
                }
                        
                    </tbody>
                </table>
                 
        </div>
    )
}
