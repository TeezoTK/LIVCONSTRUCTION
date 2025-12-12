export default function ReviewsSection() {
  const reviews = [
    {
      name: "Ailsa A",
      location: "HP7",
      rating: 10,
      title: "Repair of a flowerbed retaining wall",
      review: "Responded quickly to advert. Attended promptly to give an estimate and carried out work as specified.",
      date: "Posted 03 November",
      verified: true
    },
    {
      name: "Verified Customer",
      location: "HP4", 
      rating: 10,
      title: "Super professional and reliable team",
      review: "Liv responded really quickly to my job request, organised to come and do a quote next day and did the job a day later. He gave a reasonable quote and he and his team did the job super quickly and to a high standard. Liv and his team are super professional, reliable and friendly.",
      date: "Posted 27 October",
      verified: true
    },
    {
      name: "Verified Customer",
      location: "HP15",
      rating: 10,
      title: "A builder you can trust",
      review: "I've now known Liv for over two years and is always my first point of contact for any general building work. This time I used Liv to totally strip and refit my bathroom and two shower rooms. What I really like with Liv is the priced agreed is what you pay with minor changes/issues encountered picked up for free.",
      date: "Posted 19 October",
      verified: true
    },
    {
      name: "Zoya B",
      location: "HP6",
      rating: 10,
      title: "Wall partition work",
      review: "Liv Construction Ltd did a great wall partition job and installation of double door in our guestroom. Great communication, great quality of the work and they have dealt with all our requests promptly and efficiently.",
      date: "Posted 17 October", 
      verified: true
    },
    {
      name: "Verified Customer",
      location: "SL7",
      rating: 10,
      title: "Great Job",
      review: "A lovely job, carried out quickly. Will use them again",
      date: "Posted 10 November",
      verified: true
    },
    {
      name: "Verified Customer", 
      location: "HP5",
      rating: 10,
      title: "Quick and Professional",
      review: "Liv did a great job on the mastic sealant in my showers, thank you!!",
      date: "Posted 20 November",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-900">9.9</span>
              <span className="text-xl text-gray-600 ml-1">/10</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-slate-800">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl"></i>
                ))}
              </div>
              <span className="text-gray-600 ml-2">Based on 69 Checkatrade reviews</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genuine reviews from real customers on Checkatrade, the UK's most trusted trades directory
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
                <div className="flex items-center bg-slate-800 text-white px-3 py-1 rounded-full">
                  <span className="font-bold">{review.rating}</span>
                  <span className="text-sm ml-1">/10</span>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
              <p className="text-gray-600 mb-4 line-clamp-4">{review.review}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{review.date}</span>
                {review.verified && (
                  <div className="flex items-center">
                    <i className="ri-checkbox-circle-line text-slate-800 mr-1"></i>
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
            Read All Reviews on Checkatrade
          </button>
          <p className="text-gray-600">
            <i className="ri-shield-check-line text-slate-800 mr-2"></i>
            All reviews independently verified by Checkatrade
          </p>
        </div>
      </div>
    </section>
  );
}
