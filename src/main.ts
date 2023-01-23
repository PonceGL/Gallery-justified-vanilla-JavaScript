import { Options } from "./types";
import images from "./data/images.json";
import "./styles/style.css";
import { gallery } from ".";

(function () {
  const options: Options = {
    images: images,
    showTitle: true,
    // centerTitle: true,
    showDescription: true,
    // centerDescription: true,
    // separation: 10,
  };

  gallery(options);
})();
