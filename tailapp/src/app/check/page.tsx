import Image from "next/image";

export default function Home() {
    const address: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0L9NWdjUOW6MhqpwtitJkfiIPg9HYc9Ecig&s"
    const a: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWU_SFd7cHuf7WBr1QlYBtiozCXrF_hqwKg&s"
    return (
        <div>
            <div>
                <img src={a} />

            </div>

            <div className="flex">
                <div >
                    logo
                </div>
                <div>
                    <div>
                        video description
                    </div>
                    <div>
                        channel name
                    </div>
                </div>
            </div>
        </div>
    )
}