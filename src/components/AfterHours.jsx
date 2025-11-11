import './AfterHours.css';

function AfterHours() {
  const photos = [
    {
      id: 1,
      image: "/after-hours-1.jpg",
      alt: "Travel sketches and painting supplies"
    },
    {
      id: 2,
      image: "/after-hours-2.jpg",
      alt: "Travel sketches with animals and landscapes"
    },
    {
      id: 3,
      image: "/after-hours-3.jpg",
      alt: "Travel sketches with monuments and characters"
    }
  ];

  return (
    <div className="after-hours">
      <div className="after-hours-header">
        <h1 className="after-hours-title">After Hours</h1>
      </div>
      
      <div className="photos-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.image} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AfterHours;
