import React from 'react';
const featuresData = [
  { id: 1, title: "Office Space", description: "Choose from a range of office sizes and styles across 5 locations in Dublin City and Sandyford Business District. Our offices are suitable for all types of businesses and individuals looking for private working space.", image: "/images/office-space.jpg" },
  { id: 2, title: "Meeting Rooms", description: "Book professional meeting rooms equipped with high-speed internet, whiteboards, and video conferencing facilities.", image: "/images/meeting-room.jpg" },
  { id: 3, title: "Co-working Spaces", description: "Flexible co-working spaces with high-speed internet, ergonomic furniture, and a collaborative environment.", image: "/images/coworking-space.jpg" },
  { id: 4, title: "Virtual Offices", description: "Get a prestigious business address, mail handling, and call forwarding services with our virtual office solutions.", image: "/images/virtual-office.jpg" },
  { id: 5, title: "Event Spaces", description: "Host workshops, conferences, and networking events in our well-equipped event spaces.", image: "/images/event-space.jpg" },
  { id: 6, title: "Dedicated Desks", description: "Secure a dedicated desk in a shared workspace with storage options and 24/7 access.", image: "/images/dedicated-desk.jpg" }
];

const Features = () => {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        {featuresData.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-card-image">
              <img src={feature.image} alt={feature.title} className="feature-image" />
            </div>
            <div className="feature-card-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#" className="feature-link">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
