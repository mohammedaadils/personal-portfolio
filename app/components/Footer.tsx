import { profile } from "../content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="l">© {new Date().getFullYear()} {profile.name}</span>
        <a
          className="c ext"
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB ↗
        </a>
        <span className="r">{profile.location}</span>
      </div>
    </footer>
  );
}
