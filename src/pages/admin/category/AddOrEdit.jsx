import React from "react";
import { Link } from "react-router-dom";

const initialState = {
  name:'',
  image:'',
status:''
}
const AddOrEdit = () => {
  return (
    <>
      <div className="card">
        <div className="card-header bg-primary">
          <h5 className="text-light">
            Add Category
            <Link
              to="/admin/category"
              className="btn btn-success"
              style={{
                color: "#fff",
                float: "right",
              }}
            >
              Add Category
            </Link>
          </h5>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label forHtml="name" className="form-label">
                Category Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="category_name"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-3">
              <label forHtml="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status">Status</label>
              <select class="form-select form-control">
                <option selected>Select Status</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddOrEdit;
