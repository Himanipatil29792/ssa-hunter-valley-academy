"use client";

const professionals = [
  {
    name: "Craig Tiley",
    role: "CEO Tennis Australia &\nAustralian Open",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Stephen Farrow",
    role: "Director - Tournament, Players &\nInternational Relations",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Cameron Pearson",
    role: "Head Major Events -\nTennis Australia",
    img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?fm=jpg",
  },
];

export default function OurProfessionals() {
  return (
    <section className="w-full bg-white py-15 px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-[#1a1a1a] flex items-start gap-2 leading-tight">
              Meet our professionals
              <span className="w-3 h-3 rounded-full bg-[#8DC63F] inline-block mt-2 flex-shrink-0" />
            </h2>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy
              <br />
              text ever since the 1500s.
            </p>
          </div>

          <button className="bg-[#8DC63F] text-white font-semibold px-8 py-2 !rounded-full text-sm hover:bg-[#7ab535] transition-colors duration-200 whitespace-nowrap mt-1">
            View All
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {professionals.map((person, i) => (
            <div key={i} className="flex flex-col">
              {/* Photo */}
              <div className="overflow-hidden rounded-sm">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-[300px] object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600 italic mt-1 leading-relaxed whitespace-pre-line">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
