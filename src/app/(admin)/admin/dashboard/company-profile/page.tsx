import CompanyProfile from "@/components/admin/company-profile-comps/CompanyProfile";

import React from "react";

const AdminHome = () => {
  return (
    <div className="w-full relative flex flex-col gap-6">
      <CompanyProfile />
    </div>
  );
};

export default AdminHome;
