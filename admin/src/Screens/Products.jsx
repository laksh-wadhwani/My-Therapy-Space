import React, { useState } from "react";
import CustomButton from "../Components/CustomButton";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import Product1 from "../assets/product1.svg"
import Product2 from "../assets/product2.svg"
import Product3 from "../assets/product3.svg"
import CustomSearchBar from "../Components/CustomSearchBar";

const Products = ({isSidebarHovered}) => {

    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const productsData = [
            {id: 1, title: "Visual Routine Chart Blank", price: "$8.99", picture: Product1},
            {id: 2, title: "2 Year Old Circle Time Board", price: "$8.82", picture: Product2},
            {id: 3, title: "10 Interactive Song Boards", price: "$7.00", picture: Product3},
            {id: 4, title: "Visual Routine Chart Blank", price: "$8.99", picture: Product1},
            {id: 5, title: "2 Year Old Circle Time Board", price: "$8.82", picture: Product2},
            {id: 6, title: "10 Interactive Song Boards", price: "$7.00", picture: Product3}
    ]

    return(
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

                <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">Manage Products</h1>
                    <p className="font-serif text-gray-500 text-base italic">Create, edit and manage product listings for your website</p>
                </div>

                <div className="w-full px-4 pr-16 flex justify-between">
                    <CustomButton onClick={onOpenModal}>add new product</CustomButton>
                    <CustomSearchBar placeholder="Search"/>
                </div>

                <div className="w-full px-4 flex flex-wrap gap-16">
                   {productsData.map(product => (
                       <div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-between pb-4 cursor-pointer hover:scale-105">
                            <img src={product.picture} alt="Product Picture" className="w-full h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center">
                                <h5 className="font-serif text-black text-lg text-center">{product.title}</h5>
                                <p className="font-serif text-gray-400 text-center">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div> 

        <Modal open={open} onClose={onCloseModal} center 
        styles={{closeButton:{display:'none'}, modal:{padding:'0', borderRadius: ".8rem"}}}>

            <div className="w-full flex flex-col gap-6 w-sm box-border pb-10">

            <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new product</h5>

            <div className="w-full flex flex-col gap-4 px-6">
                <CustomInput label="product name" placeholder="Name" type="text"/>
                <CustomInput label="price" type="number" placeholder="Price"/>
                <CustomInput label="prodict picture" type="file"/>
            </div>

            <div className="w-full px-6 flex justify-center gap-2">
                <CustomButton>Add Product</CustomButton>
            </div>

            </div>

        </Modal>

        </React.Fragment>
    )
}

export default Products