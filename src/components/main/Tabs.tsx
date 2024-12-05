"use client";

import {
  Tabs as TabContainer,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/custom/custom-tabs";
import React, { useState } from "react";
import TaskRow from "./TaskRow";
import { tabsData } from "@/enums/main/tabs/tabs";
import { cn } from "@/lib/utils";

import svg from "@/assets/icons/bottom-right.svg";
import Image from "next/image";

const Tabs = () => {
  const [activeTab, setactiveTab] = useState("ongoing");
  console.log("🚀 ~ Tabs ~ activeTab:", activeTab);

  return (
    <TabContainer
      defaultValue="ongoing"
      onValueChange={(value) => setactiveTab(value)}
      className="w-full  "
    >
      <TabsList
        // defaultValue={activeTab}
        // onVolumeChange={() => setactiveTab("ongoing")}
        className=" rounded-b-none  ring-0 border-none relative"
      >
        <TabsTrigger
          value="ongoing"
          className={` w-4 md:w-36 relative ${
            activeTab === "ongoing" && "bg-[#f1f6f0] rounded-b-none active"
          }   pt-4 pb-8 px-12 rounded-tl-[40px] rounded-tr-[40px]`}
        >
          Ongoing
        </TabsTrigger>
        <TabsTrigger
          value="completed"
          className={` w-4 md:w-36 relative ${
            activeTab === "completed" &&
            "bg-[#f1f6f0] active active-before rounded-b-none"
          }  pt-4 pb-8 px-8  rounded-t-[40px]`}
        >
          Completed
        </TabsTrigger>
        <TabsTrigger
          value="canceled"
          className={` relative w-4 md:w-36 ${
            activeTab === "canceled" &&
            "bg-[#f1f6f0] active active-before rounded-b-none"
          }  pt-4 pb-8 px-8 rounded-t-[40px] `}
        >
          Canceled
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className={cn(
          "bg-[#f1f6f0] rounded-b-[40px] rounded-tr-[40px] mt-0 p-5 flex flex-col gap-5 border-none w-full",
          activeTab != "ongoing" && " rounded-tl-[40px] "
        )}
        value={activeTab}
      >
        {tabsData?.map((item) => (
          <TaskRow key={item?.taskId} data={item} />
        ))}
      </TabsContent>
    </TabContainer>
  );
};

export default Tabs;
