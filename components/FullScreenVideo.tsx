export default function FullScreenVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="website_visuals/Aknur Ashgabat Led ekran rolik.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bagtly Zamana</h1>
        </div>
      </div>
    </div>
  )
}