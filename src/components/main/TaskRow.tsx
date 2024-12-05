"use client "
import { tabsIconColor } from '@/enums/main/tabs/tabs';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface TaskRow {
    taskIcon: string;
    taskId: string;
    taskHead: string;
    timer: string;
    level: number;
}

interface TaskRowProps {
    data: TaskRow
    className?: string
}

const TaskRow: React.FC<TaskRowProps> = ({ data, className }) => {

    const { taskIcon, taskId, taskHead, timer, level } = data;

    return (
        <div className={cn(`flex flex-wrap md:justify-between gap-6 md:gap-2 w-full bg-white rounded-[20px] shadow-md p-4`, className)}>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mr-4">
                    <Image
                        src={tabsIconColor[level]?.icon}
                        alt='task icon'
                        width={20}
                        height={20}
                    />
                </div>
                <div>
                    <div className="text-label">Task ID</div>
                    <div className=" text-[16px] leading-6 font-medium">{taskId}</div>
                </div>
            </div>
            <div className="text-left pl-4">
                <div className="text-label">Task Head</div>
                <div className="text-[16px] leading-6 font-medium ">{taskHead}</div>
            </div>


            <div className=' flex md:justify-end items-center'>
                <div className="text-left">
                    <div className="text-label">Timer</div>
                    <div className="text-[16px] leading-6 font-medium">{timer}</div>
                </div>
            </div>

            <div className=' flex md:justify-end items-center'>
                <div className={`px-5 py-1 w-fit  h-fit text-black rounded-md `}
                    style={{
                        background: tabsIconColor[level]?.color
                    }}
                >
                    Level {level}
                </div>
            </div>
        </div>
    );
};


export default TaskRow;
