import Image from "next/image";
import CardTitle from "./CardTitle";
import hotline from "../../../public/emergency_hotline.jpeg";


const About = () => {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-3 gap-5 mt-10">
            <div className="col-span-2 p-4 rounded-md shadow-xl bg-white">
                <CardTitle title={"About Shaheed Smrity Model High School"}></CardTitle>

                <div className="divider divider-info"></div>

                <div className="flex gap-5 pb-16">
                    <div className="">
                        <h4 className="font-semibold text-lg mb-2">History and Foundation:</h4>
                        <p>
                        Shaheed Smrity Model High School is a public high school located in Dhaka, Bangladesh. Established in 2018 by the Government of Bangladesh, the school is committed to providing quality education and fostering a disciplined and innovative learning environment.<br></br><br></br>

                        The school offers a comprehensive curriculum designed to equip students with academic excellence, moral values, and leadership skills. With modern classrooms, experienced teachers, and extracurricular activities, Shaheed Smrity Model High School aims to develop well-rounded individuals prepared for the challenges of the future.<br></br><br></br>

                        Through its dedication to education and nation-building, the school continues to uphold the vision of honoring the memory of the martyrs while shaping the next generation of responsible citizens.

                        </p>
                    </div>
                </div>
                <div className=" text-right">
                    <a href="#" className="text-blue-500 hover:text-blue-700">Read More</a>
                </div>
            </div>
            <div className="p-4 rounded-md shadow-xl bg-white">
                <CardTitle title={"Important Links"}></CardTitle>

                <div className="divider divider-info"></div>

                <div className="flex gap-5 ">
                    
                    <Image src={hotline} alt="links" className="w-fit h-[400px] mx-auto"></Image>
                </div>
                
            </div>
            
        </div>
    );
};

export default About;