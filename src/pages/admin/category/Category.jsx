import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="card">
        <div className="card-header bg-primary">
          <h5 className="text-light">
            Category
            <Link to="/admin/category/add" className='btn btn-success' style={{
              color:'#fff',
              float:"right"
            }}>Back</Link>
          </h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
