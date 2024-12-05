import { addIcon } from "@/assets/icons";

import BranchRow from "@/components/admin/BranchRow";

import AddNewForm from "@/components/common/AddNewForm";

import TaskAddForm from "@/components/main/TaskAddForm";
import { Button } from "@/components/ui/button";
import { branchData } from "@/enums/admin/branch";

import Image from "next/image";
import React from "react";

const page = () => {
  const arra = [{ teamName: "Team name 1" }, { teamName: "Team name 2" }];
  return (
    <>
      <div className="w-full  flex flex-col gap-6">
        <AddNewForm
          triggerLabel={
            <Button
              className="rounded-[20px] px-8 h-12 absolute top-24 right-0"
              style={{
                background:
                  "linear-gradient(89.14deg, #3DA229 0.68%, #247814 100%)",
              }}
            >
              <Image
                src={addIcon ?? ""}
                alt="add icon"
                width={20}
                height={20}
              />
              Add Team
            </Button>
          }
          dialogContent={<TaskAddForm />}
        />
      </div>

      {arra?.map((e, i) => (
        <Team key={i} {...e} />
      ))}
    </>
  );
};

export default page;

interface TeamTypes {
  teamName: string;
}
const Team: React.FC<TeamTypes> = ({ teamName }) => {
  return (
    <div className=" relative rounded-[40px] border border-white p-4 bg-white backdrop-blur bg-opacity-50">
      <AddNewForm
        triggerLabel={
          <Button
            className="rounded-[20px] px-8 h-12 absolute top-4 right-0"
            style={{
              color: "#3DA229",
              border: "1px solid #3DA229",
              background: "white",
            }}
          >
            <Image src={addIcon ?? ""} alt="add icon" width={20} height={20} />
            Add Team Member
          </Button>
        }
        dialogContent={<TaskAddForm />}
      />

      <h5 className=" text-darkish text-[18px] font-[600] mt-4">{teamName}</h5>
      <div className="w-full space-y-4 mt-6">
        {branchData?.map((branch) => (
          <BranchRow key={branch?.branchId} data={branch} />
        ))}
      </div>
    </div>
  );
};
