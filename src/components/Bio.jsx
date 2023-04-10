import Button from "./Button";
import ProfilePicture from "../assets/profile-picture.jpg";

function Bio() {
  return (
    <section className="bio">
      <img className="bio__image" src={ProfilePicture} />
      <h1 className="bio__name">Dean Reymen</h1>
      <h2 className="bio__function">Frontend Developer</h2>
      <p className="bio__website">
        <a className="bio__website--text" href="/">
          reymen.dev
        </a>
      </p>
      <div className="bio__contact">
        <Button logo text="Email" icon="email" />
        <Button logo text="LinkedIn" icon="linkedin" />
      </div>
    </section>
  );
}

export default Bio;
