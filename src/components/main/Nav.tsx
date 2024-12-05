import Image from 'next/image'
import React from 'react'
import { settings, notification } from "@/assets/icons"
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Nav = () => {
    return (
        <div className='w-full sticky top-0 z-50  flex justify-between items-center py-7 container'>
            <SidebarTrigger />

            <div className=' flex gap-4 '>
                <div className='bg-white rounded-full p-2'>
                    <Image
                        src={settings}
                        alt='settings'
                        width={22}
                        height={22}
                    />
                </div>
                <div className='bg-white rounded-full p-2'>
                    <Image
                        src={notification}
                        alt='notification'
                        width={22}
                        height={22}
                    />
                </div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Nav
