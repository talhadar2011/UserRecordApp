import React, { Component } from 'react'

export default class formModal extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:props.data.name

        }
    }
    render() {
        return (
            <>
            <div className="modal fade" id="staticBackdrop" 
            data-backdrop="static" data-keyboard="false" 
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" animation="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edit From</h5>
                        <button type="button" 
                        className="close" 
                        data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <label  >Name</label>
                        <input type="text" 
                        name="name"
                         value={this.props.data.name}
                         onChange={this.props.onEditChange}
                        className="form-control"/>
                    <label>UserName</label>
                        <input type="text" 
                        name="username"
                            value={this.props.data.username}
                          onChange={this.props.onEditChange}
                        className="form-control"/>
                    <label>Email</label>
                        <input type="text" 
                        name="email"
                           value={this.props.data.email}
                         onChange={this.props.onEditChange}
                        className="form-control"/>
                    <label >Website</label>
                        <input type="text" 
                        name="website"
                         onChange={this.props.onEditChange}
                           value={this.props.data.website}
                        className="form-control"/>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" 
                        onClick={this.props.editRecord}
                        >Update
                        </button>
                    </div>
                    </div>
                </div>
                </div>
        </>
          )
    }
}


