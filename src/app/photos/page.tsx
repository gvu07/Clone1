export default function PhotosPage() {
    const photos = [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800',
      'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    ];
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Photos</h1>
          <p className="text-gray-400 mt-4">
            Photography from my travels around the world
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
  