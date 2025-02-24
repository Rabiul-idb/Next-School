import Image from "next/image";
import CardTitle from "./CardTitle";


const Messages = () => {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-3 gap-5 mt-10">
            <div className="p-4 rounded-md shadow-xl bg-white">
                <CardTitle title={"Chairman"}></CardTitle>

                <div className="divider divider-info"></div>

                <div className="flex gap-5 pb-32">
                    <figure>
                        <Image src="/dummy.png" alt="dummy" height={300} width={200}></Image>
                    </figure>
                    <div className="text-center">
                        <h4 className="font-semibold text-lg mb-2">MD. Parvej Hossain</h4>
                        <p>Chairman, Board of Directors <br></br>
                            Shaheed Smrity Model High School.
                        </p>
                    </div>
                </div>
                <div className=" text-right">
                    <a href="#" className="text-blue-500 hover:text-blue-700">Read Message</a>
                </div>
            </div>
            <div className="p-4 rounded-md shadow-xl bg-white">
                <CardTitle title={"Principle"}></CardTitle>

                <div className="divider divider-info"></div>

                <div className="flex gap-5 pb-32">
                    <figure>
                        <Image src="/dummy.png" alt="dummy" height={300} width={200}></Image>
                    </figure>
                    <div className="text-center">
                        <h4 className="font-semibold text-lg mb-2">Jamal Hossain</h4>
                        <p>Principle <br></br>
                            Shaheed Smrity Model High School.
                        </p>
                    </div>
                </div>
                <div className=" text-right">
                    <a href="#" className="text-blue-500 hover:text-blue-700">Read Message</a>
                </div>
            </div>
            <div className="p-4 rounded-md shadow-xl bg-white overflow-hidden">
                <CardTitle title={"Notice Board"}></CardTitle>

                <div className="divider divider-info"></div>
                
                <marquee behavior="scroll" height="260"  direction="up" scrollamount="2" className=" overflow-hidden" >
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Admission Lottary 2025</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Office Order</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">First Semister Exam - 2025</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Qualified Candidate for the Written Test</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Result of First Class Test</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Model Test for SSC Examinee 2025</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">First Semister Exam - 2025</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Qualified Candidate for the Written Test</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Result of First Class Test</a>
                    </div>
                    <div className="py-3 border-b-2">
                        <a href="#" className="font-medium text-lg text-red-600 hover:text-black text-left">Model Test for SSC Examinee 2025</a>
                    </div>
                </marquee>
                
                <div className="text-right mt-1">
                    <a href="#" className="text-blue-500 hover:text-blue-700">All Notice</a>
                </div>
            </div>
        </div>
    );
};

export default Messages;