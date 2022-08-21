import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state/index.js'
import { bindActionCreators } from 'redux'
import NoteItem from './NoteItem'
import UpdateNoteModal from './UpdateNoteModal.js'

const Notes = (props) => {
    const dispatch = useDispatch()
    const {getNotes} = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    
    // For the modal
    const loadModalRef = useRef(null)
    const [note, setNote] = useState({title:"",description:"",tag:"",id:""})
    const onClickingUpdateNoteIcon = (currentNote) => {
        //opens the modal
        loadModalRef.current.click()

        //populates the form in the modal with current note values
        setNote({title: currentNote.title ,description: currentNote.description ,tag: currentNote.tag, id: currentNote._id})
    }

    const notes = useSelector(state => state.notes)

    return (
        <>  
            <UpdateNoteModal loadModalRef={loadModalRef} note={note} setNote={setNote} showAlert={props.showAlert}/>
            <div className="row my-3 mx-5">
                <h2>Your Notes</h2>
                {notes.length === 0 && <div>No Notes to display</div>}
                {notes.map(note => <NoteItem note={note} key={note._id} onClickingUpdateNoteIcon = {onClickingUpdateNoteIcon} showAlert={props.showAlert}/>)}
            </div>
        </>
    )
}

export default Notes