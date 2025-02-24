

const LatestNews = () => {
    return (
        <div className="bg-blue-500 py-2">
            <div className="w-11/12 mx-auto">
                <marquee behavior="" direction="" className="text-white flex items-center">
                    <a href="#" className="mr-3">Admissions Open! – Enroll now for the upcoming academic year. Apply Now ||</a>
                    <a href="#" className="mr-3">Graduation Ceremony 2025 – Congratulations to our graduating class! Join us for the ceremony on 15th May 2025 ||</a>
                    <a href="#" className="mr-3">Science Fair Winners Announced! – Our students showcased amazing projects in this year's fair. Check out the winners here. ||</a>
                    <a href="#" className="mr-3">New Library Books Added! – Visit the school library to explore our latest collection. ||</a>
                </marquee>
            </div>
        </div>
    );
};

export default LatestNews;