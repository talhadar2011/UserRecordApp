import React from 'react'

export default function form(props) {
    return (
        <div >
            <form>
            <div className="row">
                    <div className='col-md-3'>
					<label className="label-input100" for="name">Full name</label>
                    <input 
                    id="name" 
                    className="form-control" 
                    type="text" 
                    name="name" 
                    onChange={props.onChange}
                    placeholder="Enter your name..."/>
					<span className="focus-input100"></span>
                    </div>

                    <div className='col-md-3'>
					<label className="label-input100" for="name">Username</label>
                    <input 
                    id="username" 
                    className="form-control" 
                    type="text" 
                    name="username" 
                    onChange={props.onChange}
                    placeholder="Enter your UserName..."/>
					<span className="focus-input100"></span>
                    </div>

                    <div className='col-md-3'>
					<label className="label-input100" for="email">Email Address</label>
                    <input 
                    id="email" 
                    className="form-control" 
                    type="text" 
                    name="email"
                    onChange={props.onChange} 
                    placeholder="Enter your email..."/>
					<span className="focus-input100"></span>
                    </div>

                    <div className='col-md-3'>
					<label className="label-input100" for="email">WebSite</label>
                    <input 
                    id="Website" 
                    className="form-control" 
                    type="text" 
                    name="website"
                    onChange={props.onChange} 
                    placeholder="Enter your Website..."/>
					<span className="focus-input100"></span>
                    </div>
    
                    			
            </div>
            <br></br>
            <div className="text-center">
            <button 
                    type="button" 
                    onClick={props.addRecord}
                    className="btn btn-outline-primary btn-lg ">
						Add New Data
					</button>
            </div>
            </form>
        </div>
        
    )
}
