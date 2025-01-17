import Card from "./Card";

function Tours({ to, removeTour }) {
  return (
    <div className="container">
      {/* heading */}
      <div>
        <h2 className="title">Plan With Pruthvi</h2>
      </div>
      {/* content */}
      <div className="cards">
        {/* here instead of writing different cards for different cities in tours array we use map function */}
        {/* key={tour.id} => it is a good practice to pass key while using map function */}
        {
            to.map((tour) => {
            return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
           })
        }
      </div>
    </div>
  );
}

export default Tours;
