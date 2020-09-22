import React, { Component } from 'react'
import Note from './Note'

class NoteList extends Component {
  constructor(props){
    super(props)
    this.state = { 
      notesList: ["A test note!", "Another note!"],
      value: ''
    }
  }
  changeHandler = (event) => {
    this.setState({value: event.target.value})
  }

  submitHandler = (event) => {
    this.state.notesList.push(this.state.value)
    this.setState({NoteList: this.state.notesList});
    event.preventDefault();
  }

  render(){
    return(
      <div className="note-list">
        {this.state.notesList.map((note, index) => <ul key={index}><Note content={note}/></ul>)}
        <form onSubmit={this.submitHandler}>
          <label>
            Create a note:
            <input type="text" value={this.state.value} onChange={this.changeHandler} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    )
  }

}

export default NoteList