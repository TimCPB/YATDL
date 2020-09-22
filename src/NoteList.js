import React, { Component } from 'react'
import Note from './Note'

class NoteList extends Component {
  constructor(props){
    super(props)
    this.state = { 
      note: ["A test note!", "Another note!"]
    }
  }

  render(){
    return(
      <div className="note-list">
        {this.state.note.map((note, index) => <ul key={index}><Note content={note}/></ul>)}
      </div>

    )
  }

}

export default NoteList