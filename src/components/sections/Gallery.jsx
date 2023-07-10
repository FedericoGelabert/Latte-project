const Gallery = () => {
    return (
      <div className="gallery" id="gallery">
        <h2>Gallery</h2>
        <div className="gallery__carrousel" dataFlickity={{autoplay: true}}>
        </div>
      </div>
    )
  }
  
  export default Gallery;