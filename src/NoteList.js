import React, { Component } from 'react';

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
        {this.state.note.map((note, index) => <p key={index}>{note}</p>)}
      </div>

    )
  }

}

export default NoteList