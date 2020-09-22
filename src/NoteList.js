import React, { Component } from 'react';

class NoteList extends Component {
  constructor(props){
    super(props)
    this.state = { note: "A test note!"}
  }

  render(){
    return(
      <div className="note-list">
        {this.state.note}
      </div>

    )
  }

}

export default NoteList