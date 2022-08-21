import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index.js'
import { bindActionCreators } from 'redux'

const UpdateNoteModal = (props) => {
    const {loadModalRef, note, setNote, showAlert} = props
    const dispatch = useDispatch()
    const {updateNote} = bindActionCreators(actionCreators, dispatch)
    
    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }

    const onSave = () => {
        updateNote(note)
        showAlert("success", "Note updated")
    }

    const saveButtonDisabled = note.title.length < 3 || note.description.length < 5

    return (
        <>
            {/* Below button will not be displayed, it will only be clicked to display the below modal*/}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={loadModalRef}>
                Launch demo modal
            </button>

            {/* Modal : To Edit a Note */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSave} disabled={saveButtonDisabled}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateNoteModal