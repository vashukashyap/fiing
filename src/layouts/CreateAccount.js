import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function CreateAccount() {
    const breadcrumbs = [
        <Link underline='hover' key='1' color='inherit' href='/'>
          MUI
        </Link>,
        <Link
          underline='hover'
          key='2'
          color='inherit'
          href='/material-ui/getting-started/installation/'
        >
          Core
        </Link>,
        <Typography key='3' color='text.primary'>
          Breadcrumb
        </Typography>,
      ];
  return (
    <>
    <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        {breadcrumbs}
      </Breadcrumbs>
      
      
      
    <div className="flex flex-col w-full items-center">
      <div className="w-[30rem]">
        <h1 className="text-blue-500 text-xl my-4">Basic Information</h1>
        <div className="mb-4">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-semibold"
          >
            Company Name
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="Company@xyz.com"
            className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-semibold"
          >
            About Company
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="Company@xyz.com"
            className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-semibold"
          >
            Company PAN Number
          </label>
          <input
            type="number"
            id="default-input"
            placeholder="97393 xxxxx"
            className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
          />
        </div>
      </div>
      {/* <div className="w-full h-[1px] bg-gray-300"></div> */}
      <div className="w-[30rem]">
        <h1 className="text-blue-500 text-xl my-4">Business Address</h1>
        <div className="mb-4">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-semibold"
          >
            Address line 1
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="Building, Street, Society"
            className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-semibold"
          >
            Address line 1
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="Building, Street, Society"
            className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
          />
        </div>
        <div className="mb-4">
          <label for="state" class="block mb-2 text-sm font-bold">
            State
          </label>
          <select
            id="state"
            class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md block w-full p-2.5"
          >
            <option selected>Select</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div>
          <label for="City" class="block mb-2 text-sm font-bold">
            City
          </label>

          <div className="flex flex-row gap-2">
            <div className="w-full">
              <select
                id="City"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md w-full block p-2.5"
              >
                <option selected>Select</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="mb-6 w-[100%]">
              <input
                type="number"
                id="default-input"
                placeholder="PIN Code"
                className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30rem]">
        <h1 className="text-blue-500 text-xl my-4">Contact Information</h1>
        <div className="mb-4">
            <div className="mb-4">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-semibold"
          >
            Email Address
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="Company@xyz.com"
            className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
          />
          </div>
          <div className="mb-4">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-semibold"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="97939 xxxxx"
            className="bg-gray-50 border border-gray-300  text-sm rounded-md block w-full p-2.5 "
          />
        </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="border-2 border-blue-500 text-blue-500 font-bold px-14 py-1 rounded-lg">
            Cancel
          </button>

          <button className="bg-blue-500 text-white font-bold px-14 py-1 rounded-lg">
            Next <span>{">"}</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
