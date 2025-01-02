const News = () => {
    const newsItems = [
      {
        date: '2024/09/12',
        content: 'Our P-CSG+ has been accepted by 2nd Workshop on Vision-Centric Autonomous Driving (VCAD) of ECCV 2024!'
      },
      {
        date: '2024/02/26',
        content: 'Our Motion2Vecsets has been accepted by CVPR 2024! See you in Seattle!'
      }
    ];
  
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4 text-red-600">News</h2>
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <li key={index}>
              <span className="font-bold">[{item.date}]</span> {item.content}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  