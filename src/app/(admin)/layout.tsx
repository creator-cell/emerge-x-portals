import React from 'react'

interface Props {
    children: React.ReactNode
}

const AdminLayout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default AdminLayout
