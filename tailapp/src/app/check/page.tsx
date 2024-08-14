import Image from "next/image";

export default function Home() {
    const address: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0L9NWdjUOW6MhqpwtitJkfiIPg9HYc9Ecig&s"
    const a: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWU_SFd7cHuf7WBr1QlYBtiozCXrF_hqwKg&s"
    const logo :string = "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356"
    return (
        <div>
            <div>
                <img src = {a} />

            </div>

            <div className="flex">
                <div className="flex-none w-11 ...">
                    <div>
 <img src ={logo}  className="w-20 h-18 mt-2 rounded-lg "/>
                    </div>
                  
                   
                </div>
                <div>
                    <div className="text-xl">
                        video description
                    </div>
                    <div className="text-gray-500 text-sm">
                        <div>
                            channel name
                        </div>
                        <div className="flex">
                            <div className="flex-initial w-11 ...">
                                view
                            </div>
                            <div>
                                timestamp
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex">
                <div className="flex-none w-11 ...">
                    01
                </div>
                <div className="flex-initial w-64 ...">
                    02
                </div>
                <div className="flex-initial w-32 ...">
                    03
                </div>
            </div>
        </div>
    )
}