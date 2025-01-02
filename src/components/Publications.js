const Publications = () => {
    const publications = [
      {
        title: 'Motion2VecSets: 4D Latent Vector Set Diffusion for Non-rigid Shape Reconstruction and Tracking',
        authors: ['Feng Xu', 'Chang Luo', 'Biao Zhang', 'Matthias Nießner', 'Jiapeng Tang'],
        image: '/images/motion2vecset.gif'
      }
      // Add more publications
    ];
  
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          Selected Publications
          <a href="#" className="text-blue-600 text-sm ml-2">[Google Scholar]</a>
        </h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="flex gap-4">
              <img src={pub.image} alt={pub.title} className="w-48" />
              <div>
                <h3 className="font-bold mb-2">{pub.title}</h3>
                <p>{pub.authors.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };