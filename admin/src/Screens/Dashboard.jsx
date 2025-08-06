import React from "react";

const Dashboard = () => {
    return(
        <React.Fragment>
            <div className="w-[82%] flex flex-col gap-8 float-right">

                <h1 className="font-serf text-4xl font-bold text-black capitalize italic mt-12 border-b border-gray-200 p-4">Dashboard</h1>

                <div className="w-full flex flex-col px-4">
                    <h3 className="font-serif text-black text-xl">Welcome back, Sahil</h3>
                    <p className="font-serif text-gray-500 text-base">Here's what's happening with your site today.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Dashboard