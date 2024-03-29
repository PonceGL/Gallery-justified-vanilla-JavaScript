import { GalleryOptions, Options } from "./interfaces";
export type { Options, ImageOpject } from "./interfaces";
import "./styles/style.css";
import { justified } from "./justified";

/**
 * Take an options object, and then create a div with an id of justified_gallery_3ixTffW4,
 * where the justified gallery will be located
 * @param {Options} options - Options
 * *@param {ImageOpject[]} images - ImageOpject[]
 */
export function gallery(options: Options) {
  const content = document.querySelector<HTMLDivElement>("#justified_gallery");
  if (content) {
    content.innerHTML = `
    <div class="justified_gallery_3ixTffW4" id="justified_gallery_3ixTffW4"></div>
`;

    const galleryOptions: GalleryOptions = {
      element: document.querySelector<HTMLDivElement>(
        "#justified_gallery_3ixTffW4"
      )!,
      ...options,
    };

    justified(galleryOptions);
  } else {
    throw new Error("missing div with id 'justified_gallery'.");
  }
}
