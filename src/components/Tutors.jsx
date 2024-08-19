import "../styles/Tutors.css";

function Tutors(props) {
  return (
    <section id="tutors">
      <div className="tengah">
        <div className="kolom">
          <p className="deskripsi">Our Top Tutors</p>
          <h2>Tutors</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio!
          </p>
        </div>

        <div className="tutor-list">
          {props.tutorList.map((item, i) => {
            return (
              <div key={i} className="kartu-tutor">
                <img src={item.image} />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tutors;
