import Image from "next/image";
import AnimationImg from "@/assets/images/Animation.svg";


const Advantages = () => {
    return(
        <>
        <div className="flex flex-col gap-2 px-24 py-12">
            <h1 className="text-3xl font-semibold">Why use 
            <span className="absolute ml-2">
                Fiing?
                <span className="bg-purple-500 h-[3px] w-14 absolute -bottom-2 left-1 -rotate-6"/>
            </span>
            </h1>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-6 w-1/2">
                    <h2 className="border border-gray-300 px-8 py-3 rounded-lg self-stretch">Time-Efficient Automation</h2>
                    <h2 className="border border-gray-300 px-8 py-3 rounded-lg self-stretch">Error-Free Accuracy</h2>
                    <h2 className="border border-gray-300 px-8 py-3 rounded-lg self-stretch">Adaptable to Your Workflow</h2>
                    <h2 className="border border-gray-300 px-8 py-3 rounded-lg self-stretch">Enhanced Financial Insights</h2>

                </div>
                <div>
                    <Image className="w-[26rem]" src={AnimationImg}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Advantages;