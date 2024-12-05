import { addIcon } from "@/assets/icons";
import AssessmentCard from "@/components/admin/assessment-card";

import AddNewForm from "@/components/common/AddNewForm";

import Tabs from "@/components/main/Tabs";
import TaskAddForm from "@/components/main/TaskAddForm";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AssessmentCard />
        <AssessmentCard />
      </div>
      <div className="w-full relative flex flex-col gap-6">
        <AddNewForm
          triggerLabel={
            <Button
              className="rounded-[20px] p-4 md:px-8 h-12 absolute top-0 right-0"
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
              <span className=" hidden md:block">   Add new</span>
           
            </Button>
          }
          dialogContent={<TaskAddForm />}
        />
        <Tabs />
      </div>
    </>
  );
};

export default page;
