import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index.js'
import { bindActionCreators } from 'redux'

const NoteItem = (props) => {
    const {note, onClickingUpdateNoteIcon} = props
    const dispatch = useDispatch()
    const {deleteNote} = bindActionCreators(actionCreators, dispatch)
    const onDelete = () => {
        deleteNote(note._id)
        props.showAlert("success", "Note deleted")
    }
    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash-can mx-2" style={{cursor: "pointer"}} onClick={onDelete}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" style={{cursor: "pointer"}} onClick={() => onClickingUpdateNoteIcon(note)}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem