import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductEdit = ({ setViewModal, user }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [fullName, setFullName] = useState();
  const email = user;
  const [telephone, setTelephone] = useState();
  const baseURL = "http://localhost:3005";

  useEffect(() => {
    // let rows, total = 0;
    axios
      .get(
        `${baseURL}/products?page=1&size=3&search=${user}`
      )
      .then((response) => {
        console.log(response);
        // total = response.data.filtered;
        // rows = response.data.records.length;
      });
  }, [user]);
console.log(userDetails);
  const updateUser = () => {
    axios
      .post(`${baseURL}/edit`, { fullName, email, telephone })
      .then((response) => {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-3 pt-2">
        <div className="relative w-auto my-6 mx-auto  max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none p-4">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t mb-2">
              <h3 className="text-3xl text-black font-semibold">
                Update User Profile
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setViewModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-fullname"
                  >
                    Full Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="grid-fullname"
                    placeholder={userDetails.fullName}
                    onChange={(e) => {
                      e.preventDefault();
                      setFullName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-email"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    disabled
                    value={userDetails.email}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-telephone"
                  >
                    Telephone
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-telephone"
                    type="text"
                    onChange={(e) => {
                      e.preventDefault();
                      setTelephone(e.target.value);
                    }}
                    placeholder={userDetails.telephone}
                  />
                </div>
              </div>
            </form>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setViewModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  setViewModal(false);
                  updateUser();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default ProductEdit;
