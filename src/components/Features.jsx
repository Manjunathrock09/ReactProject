import React from 'react';
const featuresData = [
  { id: 1, title: "Office Space", description: "Choose from a range of office sizes and styles across 5 locations in Dublin City and Sandyford Business District.", image: "/images/office-space.jpg", icon: <FaBuilding /> },
  { id: 2, title: "Meeting Rooms", description: "Book professional meeting rooms equipped with high-speed internet, whiteboards, and video conferencing facilities.", image: "/images/meeting-room.jpg", icon: <FaUsers /> },
  { id: 3, title: "Co-working Spaces", description: "Flexible co-working spaces with high-speed internet, ergonomic furniture, and a collaborative environment.", image: "/images/coworking-space.jpg", icon: <FaLaptop /> },
  { id: 4, title: "Virtual Offices", description: "Get a prestigious business address, mail handling, and call forwarding services.", image: "/images/virtual-office.jpg", icon: <FaGlobe /> },
  { id: 5, title: "Event Spaces", description: "Host workshops, conferences, and networking events in our well-equipped event spaces.", image: "/images/event-space.jpg", icon: <FaCalendarAlt /> },
  { id: 6, title: "Dedicated Desks", description: "Secure a dedicated desk in a shared workspace with storage options and 24/7 access.", image: "/images/dedicated-desk.jpg", icon: <FaChair /> },
  { id: 7, title: "Call Service", description: "Professional call answering and forwarding services to ensure you never miss an important call.", image: "/images/call-service.jpg", icon: <FaPhone /> },
  { id: 8, title: "Storage Solutions", description: "Secure, climate-controlled storage spaces for businesses and individuals to store important documents, equipment, or personal belongings.", image: "/images/storage-solutions.jpg", icon: <FaArchive /> }
];

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Our Features</h2>
      <div className="feature-list">
        {featuresData.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-card-icon">{feature.icon}</div>
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
