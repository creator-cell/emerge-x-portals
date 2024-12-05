import { addIcon } from "@/assets/icons";
import AddNewTask from "@/components/common/AddNewForm";
import Tabs from "@/components/main/Tabs";
import TaskAddForm from "@/components/main/TaskAddForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full relative">
      <Tabs />
      <AddNewTask
        triggerLabel={
          <Button
            className="rounded-xl px-4 md:px-8 h-10 absolute top-4 right-0"
            style={{
              background:
                "linear-gradient(89.14deg, #3DA229 0.68%, #247814 100%)",
            }}
          >
            <Image src={addIcon ?? ""} alt="add icon" width={20} height={20} />
            <span className="hidden md:block">  Add New</span>
          
          </Button>
        }
        dialogContent={<TaskAddForm />}
      />
    </div>
  );
};

export default Home;
