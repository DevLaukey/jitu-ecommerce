import React from 'react'

const AddCustomer = (handleSubmit, inputs, handleChange, showModal, setShowModal) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <form
            action="/customers"
            onSubmit={handleSubmit}
            className="px-10 pt-3 pb-8 bg-zinc-50 rounded-lg drop-shadow-lg w-[500px] h-max">
            <h1 className="text-xl text-zinc-800 py-1 mb-8 rounded font-light text-center  border-b">
              Add Customer
            </h1>

            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                required
                value={inputs.fullname || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
              <p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
                Please enter customer name
              </p>
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={inputs.email || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
              <p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid email address
              </p>
            </div>
            <div className="flex flex-col mb-3 ">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                required
                value={inputs.telephone || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
              <p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid telephone number
              </p>
            </div>
            <div className="flex flex-col mb-3 ">
              <label htmlFor="telephone">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                required
                value={inputs.password || ""}
                onChange={handleChange}
                className="peer order-last border border-slate-400 rounded mt-1 py-1.5 px-2 focus:outline-none"
              />
              <p className="-mt-6 ml-20 invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid password
              </p>
            </div>
            <div className="flex justify-between w-full">
              <button
                onClick={() => setShowModal(false)}
                className="flex justify-center gap-x-1.5 items-center px-6 py-2 my-3 text-center text-white rounded bg-blue-600 hover:bg-rose-600 focus:bg-rose-600 font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Close
              </button>
              <button
                type="submit"
                className="px-6 py-2 my-3 text-center text-white rounded bg-blue-600 hover:bg-green-600 focus:bg-green-600 font-light">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCustomer