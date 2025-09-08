import cardimage from "../../../assets/card-img.png";
function Resource(){
    return(
    <>
    <section className="mt-32">
  <div className="flex flex-col items-center text-center mt-10 gap-3 ">
    {/* Heading */}
    <h1 className="text-2xl md:text-5xl font-semibold text-center">Essential Career Guides</h1>
    <p className="mt-5 text-base md:text-lg font-normal text-gray-700">
      Find an online library of free career resources, job search strategies, and interview prep guides
    </p>

    {/* Tabs */}
    <div className="bg-gray-200 rounded-2xl p-2 mt-4 flex flex-wrap md:flex-nowrap md:space-x-4 space-x-2 overflow-x-auto gap-3 items-center justify-center">
  <button className="px-4 py-2 rounded-2xl text-gray-600 hover:bg-white hover:shadow">
    Featured Articles
  </button>
  <button className="px-4 py-2 rounded-2xl text-gray-600 hover:bg-white hover:shadow">
    Resume
  </button>
  <button className="px-4 py-2 rounded-2xl text-gray-600 hover:bg-white hover:shadow">
    Cover Letter
  </button>
  <button className="px-4 py-2 rounded-2xl text-gray-600 hover:bg-white hover:shadow">
    Interview
  </button>
  <button className="px-4 py-2 rounded-2xl text-gray-600 hover:bg-white hover:shadow">
    Career
    </button>
  
</div>

  </div>
   <div className="min-h-screen bg-gray-50 py-10">
      {/* Container for all cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={cardimage}
              alt="Resume Tips"
              className="w-full h-48 object-cover"
            />

            {/* Text Section */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500">
                Harvard Resume Writing Tips
              </h3>
              <h2 className="font-semibold mt-1">
                How to create a resume and cover letter.
              </h2>
              <p className="text-gray-600 text-sm">
                Focus on highlighting your accomplishments
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-gray-400 mt-3">
                <span>May 14, 2023</span>
                <span>by Tailgov</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
</>

    )
}

export default  Resource