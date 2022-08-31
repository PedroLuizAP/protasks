import React from 'react'

export default function TaskForm(props) {
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Id</label>
                <input id="id" type="text" placeholder="id" className="form-control" readOnly value={Math.max.apply(Math, props.tasks.map(t => t.id)) + 1} />
            </div>

            <div className="col-md-6">
                <label className="form-label">Priority</label>
                <select id="priority" className="form-select">
                    <option defaultValue="0">Select...</option>
                    <option value="1">Low</option>
                    <option value="2">Normal</option>
                    <option value="3">High</option>
                </select>

            </div>

            <div className="col-md-6">
                <label className="form-label">Title</label>
                <input id="title" type="text" placeholder="description" className="form-control" />
            </div>

            <div className="col-md-6">
                <label className="form-label">Description</label>
                <input id="description" type="text" placeholder="description" className="form-control" />
            </div>

            <hr />
            <div className="col-12" >
                <button className="btn btn-outline-secondary" onClick={props.addTask}>+ Task</button>
            </div>
        </form>
    );
}
