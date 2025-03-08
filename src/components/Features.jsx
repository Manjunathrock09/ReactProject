import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const featuresData = [
  { id: 1, title: "Office Space", description: "Choose from a range of office sizes and styles across 5 locations in Dublin City and Sandyford Business District.", image: "/images/office-space.jpg" },
  { id: 2, title: "Meeting Rooms", description: "Book professional meeting rooms equipped with high-speed internet, whiteboards, and video conferencing facilities.", image: "/images/meeting-room.jpg" },
  { id: 3, title: "Co-working Spaces", description: "Flexible co-working spaces with high-speed internet, ergonomic furniture, and a collaborative environment.", image: "/images/coworking-space.jpg" },
  { id: 4, title: "Virtual Offices", description: "Get a prestigious business address, mail handling, and call forwarding services.", image: "/images/virtual-office.jpg" },
  { id: 5, title: "Event Spaces", description: "Host workshops, conferences, and networking events in our well-equipped event spaces.", image: "/images/event-space.jpg" },
  { id: 6, title: "Dedicated Desks", description: "Secure a dedicated desk in a shared workspace with storage options and 24/7 access.", image: "/images/dedicated-desk.jpg" },
  { id: 7, title: "Call Service", description: "Professional call answering and forwarding services to ensure you never miss an important call.", image: "/images/call-service.jpg" },
  { id: 8, title: "Storage Solutions", description: "Secure, climate-controlled storage spaces for businesses and individuals to store important documents, equipment, or personal belongings.", image: "/images/storage-solutions.jpg" }
];

const Features = () => {
  return (
    <section className="bg-dark py-5">
      <div className="container">
        <h2 className="text-center text-light mb-4">Our Features</h2>
        <div className="row">
          {featuresData.map(feature => (
            <div key={feature.id} className="col-md-6 col-lg-3 mb-4 d-flex">
              <div className="card shadow-lg w-100">
                <div className="ratio ratio-4x3">
                  <img src={feature.image} alt={feature.title} className="card-img-top img-fluid" />
                </div>
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h5">{feature.title}</h3>
                  <p className="card-text flex-grow-1">{feature.description}</p>
                  <a href="#" className="btn btn-primary mt-auto">Learn More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 