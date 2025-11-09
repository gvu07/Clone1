export default function PhotosPage() {
    const photos = [
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fgi.d.vu%2F&psig=AOvVaw204LK-8uVqtOH-NQ9HFT7_&ust=1762808385223000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCPC6ypX75ZADFQAAAAAdAAAAABAV',
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
  
