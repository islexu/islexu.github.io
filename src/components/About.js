const About = () => {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4 text-red-600">About Me</h2>
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <p className="mb-4">
              I am currently working at {' '}
              <a href="#" className="text-blue-600">Bosch Center for Artificial Intelligence (BCAI)</a>
              , supervised by Dr. Maxim Dolgov.
            </p>
            {/* Add more content */}
          </div>
          <img 
            src="/images/profile.jpg" 
            alt="Feng Xu"
            className="w-64 rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  };
  