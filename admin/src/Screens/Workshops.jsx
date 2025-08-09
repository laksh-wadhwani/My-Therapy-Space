import React, { useState } from "react";
import CustomButton from "../Components/CustomButton";
import CustomTable from "../Components/CustomTable";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";

const Workshops = ({ isSidebarHovered }) => {

  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const columns = [
    { key: "title", label: "Title" },
    { key: "facilitator", label: "Facilitator" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
  ];

  const workshopStatusStyles = {
    Active: "bg-green-100 text-green-700",
    Draft: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  const workshops = [
    {title: "Speech Therapy Workshop", facilitator: "Trish Hull", date: "2025-05-06", status: "Active"},
    {title: "Communication Development Workshop", facilitator: "Angeli", date: "2025-05-12", status: "Active"},
    {title: "Supporting Multilingual Workshop", facilitator: "Suman Rokka", date: "2025-05-22", status: "Draft"},
    {title: "Parent Training workshop", facilitator: "Ziaul-Haq", date: "2025-05-28", status: "Cancelled"},
    {title: "Speech Therapy Workshop", facilitator: "Trish Hull", date: "2025-05-06", status: "Active"},
    {title: "Communication Development Workshop", facilitator: "Angeli", date: "2025-05-12", status: "Active"},
    {title: "Supporting Multilingual Workshop", facilitator: "Suman Rokka", date: "2025-05-22", status: "Draft"},
    {title: "Parent Training workshop", facilitator: "Ziaul-Haq", date: "2025-05-28", status: "Cancelled"}
  ];

  return (
    <React.Fragment>
      <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

        <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
          <h1 className="font-serf text-4xl font-bold text-black capitalize italic">manage workshops</h1>
          <p className="font-serif text-gray-500 text-base italic">create, edit and manage workshop listings for your websites</p>
        </div>

        <div className="w-full px-4 flex justify-between">
          <CustomButton onClick={onOpenModal}>add new workshop</CustomButton>
        </div>

        <CustomTable title="Workshops" columns={columns} data={workshops} statusStyles={workshopStatusStyles} />

      </div>

      <Modal open={open} onClose={onCloseModal} center
      styles={{closeButton:{display:'none'}, modal:{padding:'0', borderRadius: ".8rem"}}}
      >

        <div className="w-full flex flex-col gap-6 w-sm box-border pb-10">

          <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new workshop</h5>

          <div className="w-full flex flex-col gap-4 px-6">
            <CustomInput label="workshop title" placeholder="Title" type="text"/>
            <CustomInput label="facilitator" placeholder="Name" type="text"/>
            <CustomInput label="Date" type="date"/>
            <CustomInput label="Workshop Image" type="file"/>
          </div>

          <div className="w-full px-6 flex justify-center gap-2">
            <CustomButton>save as draft</CustomButton>
            <CustomButton>create Workshop</CustomButton>
          </div>

        </div>

      </Modal>
    </React.Fragment>
  );
};

export default Workshops;
