"use client";

import React, { useState } from "react";
import { useForm, Controller, FormProvider, FieldValues } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import CustomCheckbox from "../custom/custom-checkbox";
import { Textarea } from "../ui/textarea";
import { accident, hot, mic, fire, snow, pipe } from "@/assets/icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Zod validation schema for the form
const schema = z.object({
    taskType: z.array(z.string()).nonempty("Please select at least one task type"),
    description: z
        .string()
        .min(5, "Description must be at least 5 characters long")
        .max(200, "Description cannot exceed 200 characters"),
});

export type schemaType = z.infer<typeof schema>;

const TaskTypes = [
    { icon: fire, label: "fire", value: "fire" },
    { icon: snow, label: "snow", value: "snow" },
    { icon: pipe, label: "pipe leak", value: "pipe leak" },
    { icon: hot, label: "hot", value: "hot" },
    { icon: accident, label: "accident", value: "accident" },
];

const TaskAddForm = () => {

    const [step, setStep] = useState(1);


    const onNext = () => {
        setStep(2);
    }

    const formMethods = useForm<schemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            taskType: [],
        },
        mode: "all",
        criteriaMode: "all",
        progressive: true,
        reValidateMode: "onChange",
    });

    const { control, handleSubmit, watch, formState: { errors } } = formMethods;

    // Handle form submission
    const onSubmit = (data: schemaType) => {
        console.log("🚀 ~ onSubmit ~ data:", data)
    };

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between my-3">
                <Label htmlFor="taskType" className="block text-sm font-medium text-gray-700">
                    Type of task
                </Label>
                <div>
                    <span className="text-green-400 text-[22px]">{step}</span> /2</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                {
                    step === 1 ? (
                        <div className="mb-4 ">
                            <Controller
                                name="taskType"
                                control={control}
                                render={({ field }) => (
                                    <div className=" grid grid-cols-3 gap-3">
                                        {TaskTypes.map((task) => (
                                            <div key={task.value} className="flex items-center size-full">
                                                <CustomCheckbox
                                                    id={`checkbox-${task.value}`}
                                                    label={task.label}
                                                    icon={task.icon}
                                                    description={`Task: ${task.label}`}
                                                    checked={field?.value?.includes(task.value)}
                                                    onChange={(checked) => {
                                                        const updatedValue = checked
                                                            ? [...field.value, task.value] // Add value to array
                                                            : field.value.filter((v) => v !== task.value); // Remove value from array
                                                        field.onChange(updatedValue); // Update form state
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            />
                            {errors.taskType && (
                                <span className="text-red-500 text-xs">{errors.taskType.message}</span>
                            )}

                        </div>
                    ) : (
                        <div className="mb-4 relative">
                            <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </Label>
                            <Controller
                                name="description"
                                control={control}
                                render={({ field }) => (
                                    <Textarea
                                        {...field}
                                        id="description"
                                        placeholder="Enter your description here"
                                        rows={8}
                                        className="mt-1"
                                    />
                                )}
                            />
                            <Button variant={"ghost"}>
                                <Image
                                    src={mic ?? ""}
                                    alt="mic"
                                    width={30}
                                    height={30}
                                    className="absolute right-4 bottom-12"
                                />
                            </Button>
                            {errors.description && (
                                <span className="text-red-500 text-xs">{errors.description.message}</span>
                            )}
                        </div>
                    )
                }
                {
                    step === 2 && (
                        <Button type="submit" className="text-black self-end">Submit</Button>
                    )
                }
                {
                    step === 1 && (
                        <Button
                            type="button"
                            variant={"ghost"}
                            disabled={watch("taskType").length === 0} onClick={onNext}
                            className="text-black self-end hover:bg-transparent ">Next <span className="p-3 bg-gradient-to-r rounded-md from-[10%] from-[#3DA229] to-[#247814]"
                                style={{
                                    background: "linear-gradient(89.14deg, #3DA229 0.68%, #247814 100%)"

                                }}><ArrowRight size={12} /></span>  </Button>
                    )
                }
            </form>
        </div >
    );
};

export default TaskAddForm;
