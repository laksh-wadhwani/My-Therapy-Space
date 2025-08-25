import React, { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";
import CustomTable from "../Components/CustomTable";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import { toast } from "react-toastify";
import axios from "axios";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router-dom";
import CustomFileUpload from "../Components/CustomFileUpload";

const Workshops = ({ isSidebarHovered }) => {

  const URL = BackendURL();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [drafting, setDrafting] = useState(false)
  const [open, setOpen] = useState(false)
  const [seeDetails, setSeeDetails] = useState(false)
  const [editDetails, setEditDetails] = useState(false)
  const [workshop, setWorkshop] = useState({})
  const [workshopss, setWorkshops] = useState([])
  const [workshopData, setWorkshopData] = useState({
    title: "",
    facilitator: "",
    date: Date.now(),
    workshopImage: null
  })

  useEffect(() => {
    axios.get(`${URL}/api/workshops/get-all-workshop`)
    .then(response => setWorkshops(response.data))
    .catch(error => console.error("Getting error in fetching workshops: ",error))
  },[workshopss])

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

  const handleChange = eventTriggered => {
    const { name, type, value, files } = eventTriggered.target;

    if (type === "file") {
      const file = files[0];
      if (file && !file.type.startsWith("image/")) {
        toast.error("Only image files are allowed!");
        return;
      }
      setWorkshopData({
        ...workshopData,
        [name]: file
      });
    } else {
      setWorkshopData({
        ...workshopData,
        [name]: value
      });
    }
  }

  const WorkshopData = new FormData();
  Object.entries(workshopData).forEach(([Key, value]) => {
    WorkshopData.append(Key, value)
  })

  const UploadWorkshop = () => {
    setLoading(true)
    axios.post(`${URL}/api/workshops/upload`, WorkshopData)
      .then(response => {
        toast.success(response.data.message)
        setTimeout(() => { navigate(0) }, 2500)
      })
      .catch(error => {
        console.error("Getting error in uploading workshop")
        return toast.error(error?.response?.data?.error)
      })
      .finally(() => { setLoading(false) })
  }

  const SaveAsDraft = () => {
    setDrafting(true)
    axios.post(`${URL}/api/workshops/save-as-draft`, WorkshopData)
      .then(response => {
        toast.success(response.data.message)
        setTimeout(() => { navigate(0) }, 2500)
      })
      .catch(error => {
        console.error("Getting error in uploading workshop")
        return toast.error(error?.response?.data?.error)
      })
      .finally(() => { setDrafting(false) })
  }

  const SeeDetails = workshopData => {
    setSeeDetails(true)
    setWorkshop(workshopData)
  }

  const EditDetails = workshopData => {
    setEditDetails(true)
    setWorkshop(workshopData)
  }

  const DeleteWorkshop = workshopData => {
    axios.delete(`${URL}/api/workshops/delete/${workshopData._id}`)
    .then(response => toast.success(response.data.message) )
    .catch(error => {
      console.error("Getting error in deleting workshop")
      return toast.error(error.response.data.error)
    })
  }

  const UpdateWorkshop = workshopId => {
    setLoading(true)
    axios.put(`${URL}/api/workshops/update/${workshopId}`, WorkshopData)
    .then(response => {
      toast.success(response.data.message)
      setTimeout(() => {navigate(0)},2500)
    })
    .catch(error => {
      console.error("Getting error in updating workshop details: ",error)
      return toast.error(error.response?.data?.error)
    })
    .finally(() => {setLoading(false)})
  }

  const ChangeStatus = workshopId => {
    axios.put(`${URL}/api/workshops/change-status/${workshopId}`)
    .then(response => {
      toast.success(response.data.message)
      setTimeout(() => {navigate(0)},2500)
    })
    .catch(error => {
      console.error("Getting error in changing status of workshop: ",error)
      return toast.error(error.response?.data?.error)
    })
  }


  return (
    <React.Fragment>
      <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>

        <div className="w-full p-4 mt-6 max-sm:mt-18 border-b border-gray-200 flex flex-col gap-2 max-sm:px-0">
          <h1 className="font-serf text-4xl max-sm:text-3xl font-bold text-black capitalize italic">manage workshops</h1>
          <p className="font-serif text-gray-500 text-base italic max-sm:text-sm">create, edit and manage workshop listings for your websites</p>
        </div>

        <div className="w-full px-4 flex justify-between">
          <CustomButton onClick={() => setOpen(true)}>add new workshop</CustomButton>
        </div>

        <CustomTable title="Workshops" columns={columns} data={workshopss} statusStyles={workshopStatusStyles} onView={SeeDetails} onEdit={EditDetails} onDelete={DeleteWorkshop} />

      </div>

      <Modal open={open} onClose={() => setOpen(false)} center
        styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}
      >

        <div className="w-full flex flex-col gap-6 w-sm box-border pb-10">

          <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new workshop</h5>

          <div className="w-full flex flex-col gap-4 px-6">
            <CustomInput label="workshop title" placeholder="Title" type="text" name="title" value={workshopData.title} onChange={handleChange} />
            <CustomInput label="facilitator" placeholder="Name" type="text" name="facilitator" value={workshopData.facilitator} onChange={handleChange} />
            <CustomInput label="Date" type="date" name="date" value={workshopData.date} onChange={handleChange} />
            <CustomFileUpload label="Workshop Image" value={workshopData.workshopImage} onChange={handleChange} />
          </div>

          <div className="w-full px-6 flex justify-center gap-2">
            <CustomButton onClick={SaveAsDraft} disabled={drafting}>
              {drafting ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "save as draft"}
            </CustomButton>
            <CustomButton onClick={UploadWorkshop} disabled={loading}>
              {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Create Workshop"}
            </CustomButton>
          </div>

        </div>

      </Modal>

      <Modal open={seeDetails} onClose={() => setSeeDetails(false)} center
        styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>
        <div className="w-full box-border">
          {workshop && <img src={workshop.workshopImage}/>}
        </div>
      </Modal>

      <Modal open={editDetails} onClose={() => setEditDetails(false)} center
        styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>

        <div className="w-full flex flex-col gap-6 w-sm box-border pb-10">

          <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new workshop</h5>

          <div className="w-full flex flex-col gap-4 px-6">
            <CustomInput label="workshop title" placeholder={workshop.title} type="text" name="title" value={workshopData.title} onChange={handleChange} />
            <CustomInput label="facilitator" placeholder={workshop.facilitator} type="text" name="facilitator" value={workshopData.facilitator} onChange={handleChange} />
            <CustomInput label="Date" type="date" name="date" value={workshopData.date} onChange={handleChange} />
            <CustomFileUpload label="Workshop Image" value={workshopData.workshopImage} onChange={handleChange} />
          </div>

          <div className="w-full px-6 flex justify-center gap-2">
            <CustomButton onClick={() => UpdateWorkshop(workshop._id)} disabled={loading}>
              {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Save"}
            </CustomButton>
            <CustomButton onClick={() => ChangeStatus(workshop._id)}>Change Status</CustomButton>

          </div>

        </div>

      </Modal>

    </React.Fragment>
  );
};

export default Workshops;
