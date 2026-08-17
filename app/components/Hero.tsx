import Image from "next/image";
import { profile } from "../content";

export default function Hero() {
  return (
    <section id="top" className="wrap hero">
      <div>
        <h1 className="hero-name">
          Hi! I&apos;m {profile.name}
          <span className="accent">.</span>
        </h1>

        <p className="hero-intro">
          {profile.introLead}
          <span className="accent">{profile.introCompany}</span>
          {profile.introTail}
        </p>
      </div>

      <div>
        <div className="hero-photo">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="280px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="hero-tags">
          <span className="hero-tag">{profile.descriptor}</span>
          <span className="hero-tag">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
