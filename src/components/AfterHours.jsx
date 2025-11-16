import './AfterHours.css';
import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.BASE_URL;

function AfterHours() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // List of image files from the Art folder
    const imageFiles = [
      'Japan Sketchbook 1.jpg',
      'Japan Sketchbook 2.jpg',
      'Japan Sketchbook 3.jpg',
      'Japan Sketchbook 4.jpg',
      'Japan Sketchbook 5.jpg',
      'Denver Logo Hat.JPG',
      'Denver Logo PNG.PNG',
      'Freya Painting.jpg',
      'Freya Photo.jpg',
      'Kona Photo.jpg',
      'Kona Painting.jpg',
      'Kona Sketch Ink.jpg',
      'Kona Sketch.jpg',
      'Logan Sketch.jpg',
      'Mochi Logo.JPG',
      'Mochi Sketch Ink.jpg',
      'Mochi Sketch.jpg',
      'Savannah Painting.jpg',
      'Toby Painting Framed.jpeg',
      'Toby Photo.jpg',
      'Winnie Photo.jpg',
      'Winnie Sketch.jpg',
      'Wedding Cocktails Painting.jpg',
      'Wedding Table Numbers Paintings.jpg'
    ];

    // Filter for web-compatible formats and create photo objects
    const webFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const photoList = imageFiles
      .filter(file => {
        const ext = file.split('.').pop().toLowerCase();
        return webFormats.includes(ext);
      })
      .map((file, index) => ({
        id: index + 1,
        image: BASE_URL + `Art/${file}`,
        alt: `Art piece ${index + 1}`
      }));

    setPhotos(photoList);
  }, []);

  return (
    <div className="container">
      <div>
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
