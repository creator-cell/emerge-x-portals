import { addIcon } from "@/assets/icons";
import AddBranchForm from "@/components/admin/add-branch-form";
import Branchs from "@/components/admin/Branchs";
import AddNewForm from "@/components/common/AddNewForm";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";

const AdminHome = () => {
  return (
    <div className="w-full relative flex flex-col gap-6">
      <AddNewForm
        triggerLabel={
          <Button
            className="rounded-[20px] p-4 md:px-8 h-12 self-end text-[16px] font-normal leading-6"
            style={{
              background:
                "linear-gradient(89.14deg, #3DA229 0.68%, #247814 100%)",
            }}
          >
            <Image src={addIcon ?? ""} alt="add icon" width={20} height={20} />
            Add new branch
           
          </Button>
        }

        dialogContent={<AddBranchForm />}
      />
      <Branchs />
    </div>
  );
};

export default AdminHome;
