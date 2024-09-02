import React, { FC } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  places: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  users,
  places,
}) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex gap-10">
        <div>{users}</div>
        {/* <div>{places}</div> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
