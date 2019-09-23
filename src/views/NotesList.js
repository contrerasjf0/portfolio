import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NotesCard from '../components/NoteCard';
import notesDataSet from '../dataSet/notes';

export default class NotesList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props);

        this.handleClickEdit = this.handleClickEdit.bind(this);
    }

    handleClickEdit(id){
        this.props.history.push('/note/'+id);
    }

    render() {
        return (
            <div className="notesList__wrapper">
               {
                   notesDataSet.map((note) => {
                        return (
                            <NotesCard id={note.id}
                                        title={note.title}
                                        description={note.description}
                                        date={note.date}
                                        onClickEdit={this.handleClickEdit}
                            />
                        );
                   })
               }
            </div>
        )
    }
}
