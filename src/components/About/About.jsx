import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <p className="about__label">About MediTrack</p>
        <h2 className="about__title">
          A simple way to organize personal medication information.
        </h2>
        <p className="about__text">
          MediTrack helps users search medication data, compare available
          formulations, and prepare a personal list with notes and frequency
          details.
        </p>
      </div>
    </section>
  );
}

export default About;