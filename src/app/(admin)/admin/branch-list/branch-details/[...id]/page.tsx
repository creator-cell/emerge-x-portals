import TextBar from "@/components/common/TextBar";

import React from "react";

const page = () => {
  return (
    <div className="bg-white rounded-[40px] p-[32px]">
      <div>
        <h5 className="text-darkish text-[20px] font-[500] ">Company name</h5>
        <p className="text-grayish text-[14px] font-[500]">
          Branch ID : FIRMD-273UY
        </p>
      </div>

      <div className="flex flex-col gap-[27px] mt-6">
        <TextBar
          title="Location"
          line="114 Strand, London WC2R 0AG, United Kingdom"
        />
        <TextBar title="Number of employees" line="241" />

        <div className="flex flex-col md:flex-row gap-[27px] ">
          <div className="w-full md:w-[40%]">

          <TextBar title="Type of business" line="Business 1" />
          </div>
          <div className="w-full md:w-[40%]">

          <TextBar title="Emergency contact number" line="+21 4335 3432" />
          </div>
        </div>

        <div className="flex flex-col  md:flex-row gap-[27px] ">
          <div className="w-full md:w-[40%]">

          <TextBar title="Company mail ID" line="company@gmail.com" />
          </div>
          <div className="w-full md:w-[40%]">

          <TextBar title="Contact number" line="+21 4335 3432" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
