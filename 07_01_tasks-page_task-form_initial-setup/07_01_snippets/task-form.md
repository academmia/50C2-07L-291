```jsx

<div className="page-content">
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="card col col-md-10">
                <div className="card-header d-flex justify-content-between">
                    <h3 className="mt-2" style={{ display: 'inline-block'}}>Task Add</h3>
                    <button 
                        className="btn btn-info"> Back to list </button>
                </div>
                <form>
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-md-9">
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <input 
                                        className="form-control" type="text" /></div> 
                            </div>
                            <div className="col col-md-3">
                                <div className="form-group">
                                    <label className="form-label">Status</label>
                                    <input 
                                        className="form-control" type="text" /></div>
                            </div>
                            <div className="col col-md-12">
                                <div className="form-group">
                                    <label className="form-label">Description</label>
                                    <input 
                                        className="form-control" type="text" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-right">
                        <button 
                            className="btn btn-primary ml-3">
                            Add and close</button></div>
                </form>
            </div>
        </div>
    </div>
</div>

```