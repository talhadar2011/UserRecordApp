import React, { Component } from 'react'
import Form from './form'
import Table from'./table'
import Modal from './formModal'
//import CModal from "./classformdal";
export default class list extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[],
            newRecord:{},
            username:'',
            editableData:{},
        }
        this.addRecord=this.addRecord.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onEditChange=this.onEditChange.bind(this);
        this.editRecord=this.editRecord.bind(this);
        this.deleteRecord=this.deleteRecord.bind(this);
        this.getRecord=this.getRecord.bind(this);

    }
    async componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/users";
        const responce=await fetch(url);
        const data=await responce.json();
        this.setState({users:data})
    }
    //handle change for add Record
    onChange(event){
        const {name,value}= event.target;
        this.setState(prevState=>({
            newRecord : {...prevState.newRecord,[name]:value}
        }))

    }
    addRecord(){
       
        const newRecord=this.state.newRecord
         this.setState(prevState=>({
             users : [newRecord,...prevState.users],

         }))
        console.log(this.state.users)
    }
     //for fatching selected Record
     getRecord(username){
        const editRecord=this.state.users.find(user=>user.username===username)
        this.setState({
             editableData:editRecord,
             username : username,
            })
          
        
    }
    //handle chage to edit record
    onEditChange(event){
        const {name,value}= event.target;
        const editableData=this.state.editableData
        this.setState(prevState=>({
            editableData : {...prevState.editableData,[name]:value}
        }))

    }
    editRecord(){
       
          const username = this.state.username;
          const Editeduser=this.state.editableData
          const users=Object.assign([],this.state.users)
          const index=users.findIndex(user=>user.username===username)
          users[index]=Editeduser
          this.setState({users:users})
        
    }
   
  //to del Record
    deleteRecord(username){
        //const users=Object.assign([],this.state.users)
        //const index=users.findIndex(user=>user.username===username)
       // users=users[index].deleteRecord
        this.setState(prevState => {
            const users = prevState.users.filter(user => user.username !== username);
            return { users };
        });
    }
    render() {
        return (
            
            <div>
                
                <div className="text-center">
                    <u>
                    <h1>User Record App</h1>
                    </u>
                    <br></br>
                    
                </div>
                <Form
                onChange={this.onChange}
                addRecord={this.addRecord}
                />
                <Table
                users={this.state.users}
                deleteRecord={this.deleteRecord}
                getRecord={this.getRecord}
                />
                { <Modal
                
                data={this.state.editableData}
                onEditChange={this.onEditChange}
                editRecord={this.editRecord}
               />  }
              
            </div>
        )
    }
}
