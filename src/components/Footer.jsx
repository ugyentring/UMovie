import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <Link to="/" className="hover:underline">
          UMovie
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.facebook.com/sologuy22"
            target="_blank"
            className="mr-4 hover:underline md:mr-6 "
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ugyen-tshering-21430527a/"
            target="_blank"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC1vsaq6G0AKfWKD2JSrjfUg"
            target="_blank"
            className="mr-4 hover:underline md:mr-6"
          >
            Youtube
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ugyentring"
            target="_blank"
            className="hover:underline"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
