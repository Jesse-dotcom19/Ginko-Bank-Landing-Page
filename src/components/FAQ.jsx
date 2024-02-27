import React from "react";
import { styles, layout } from "../constant";

const FAQ = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1">
      <div className="px-4"></div>

      <div className="space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open>

          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-Light-Blue p-4 ">
            <p className="font-medium">
              What types of budgeting tools does Ginko offer?
            </p>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#3a86ff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>


      </div>
    </div>
  );
};

export default FAQ;
