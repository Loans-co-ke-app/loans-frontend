import React from "react";

type IStatus =
  | "AGRICULTURE"
  | "INDUSTRY"
  | "SERVICES"
  | "INSURANCE"
  | "Public administration"
  | "Health";

const StatusBadge = (loadedStatus: string) => {
  const statusChange = (status: IStatus) => {
    switch (status) {
      case "AGRICULTURE":
        return (
          <div className="bg-green-700 w-fit my-1 px-1 text-white text-[12px] rounded-md uppercase font-roboto">
            {loadedStatus}
          </div>
        );
      case "INDUSTRY":
        return (
          <div className="bg-gray-700 w-fit my-1 px-1 text-white text-[12px] rounded-md uppercase font-roboto">
            {loadedStatus}
          </div>
        );
      case "SERVICES":
        return (
          <div className="bg-slate-700 w-fit my-1 px-1 text-white text-[12px] rounded-md uppercase font-roboto">
            {loadedStatus}
          </div>
        );
      case "INSURANCE":
        return (
          <div className="bg-red-700 w-fit my-1 px-1 text-white text-[12px] rounded-md uppercase font-roboto">
            {loadedStatus}
          </div>
        );
      case "Public administration":
        return (
          <div className="bg-teal-700 w-fit my-1 px-1 text-white text-[12px] rounded-md uppercase font-roboto">
            {loadedStatus}
          </div>
        );
      case "Health":
        return (
          <div className="bg-orange-700 w-fit my-1 px-1 text-white text-[12px] rounded-md uppercase font-roboto">
            {loadedStatus}
          </div>
        );
      default:
        return (
          <div className="bg-black w-fit my-1 px-1 text-white text-[12px] rounded-md uppercase font-roboto">
            {loadedStatus}
          </div>
        );
    }
  };
  return <>{statusChange(loadedStatus.toUpperCase() as any as IStatus)}</>;
};

export default StatusBadge;
