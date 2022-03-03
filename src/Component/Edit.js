import React from 'react'

export const Edit = () => {
  return (
    <div className="d-flex justify-content-center container p-1">
      <form>
        <div className="m-2 p-2">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Enter your FirstName"
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Enter your LastName"
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Enter your EmpId"
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Enter your City"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
