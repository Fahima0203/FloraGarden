import './form.css'

const Form = () => {
    return (
        <div className="create">
            <h2>Add a New Plant</h2>
            <div className="card p-5" style={{ margin: "50px 1%", border: "2px solid red", borderRadius: "1.5rem" }}>
                <div className="card-body">
                    <form>
                        <label for="title" className="form-label">Product Name:</label>
                        <input id="title"
                            type="text"
                            className="form-control"
                            required
                        />
                        <label for="body">Comments:</label>
                        <textarea id="body"
                            required
                            className="form-control">
                        </textarea>
                        <label>Something:</label>
                        <select className="form-control" >
                            <option value="mario"></option>
                            <option value="mario"></option>
                        </select>
                        <button>Add Blog</button>
                    </form></div></div>
        </div>
    )
}

export default Form;