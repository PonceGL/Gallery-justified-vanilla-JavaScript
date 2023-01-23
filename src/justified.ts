import { ValidationsTypes } from "./validations";
import { GalleryOptions, ImageOpject, GalleryItem } from "./interfaces";
import { Lighbox } from "./lighbox";

class JustifiedGallery {
  private galleryItems: GalleryItem[];

  constructor(
    private readonly gallery: HTMLDivElement,
    private readonly showTitle: boolean,
    private readonly showDescription: boolean,
    private readonly centerTitle: boolean,
    private readonly centerDescription: boolean,
    private readonly separation: number,
    private validationsTypes: ValidationsTypes,
    private readonly lighbox: Lighbox
  ) {
    this.galleryItems = [];
  }

  public addImages(images: ImageOpject[]) {
    const isTypeImage = images.every((image) =>
      this.validationsTypes.isValidImageOpject(image)
    );
    if (!isTypeImage)
      throw new Error(
        "The image array does not correspond to the expected type"
      );

    const fragment = document.createDocumentFragment();
    const galleryItems = this.createBaseImage(fragment, images);
    this.justify(galleryItems);
    this.gallery.appendChild(fragment);
  }

  private createBaseImage(
    fragment: DocumentFragment,
    images: ImageOpject[]
  ): HTMLButtonElement[] {
    const galleryItems = images.map((image, i) => {
      const galleryItem = document.createElement("button");
      galleryItem.classList.add("justified_gallery_item_XrQ7n3L");
      galleryItem.setAttribute("type", "button");
      galleryItem.style.margin = `${this.separation}px`;

      const imageElement = document.createElement("img");
      imageElement.classList.add("justified_gallery_image_2EBybfL");
      imageElement.setAttribute("src", image.url);
      imageElement.setAttribute("alt", image?.altText || `image${i}`);

      if (this.showTitle) {
        const infoElement = document.createElement("div");
        infoElement.classList.add("justified_gallery_info_67Em2oBA");

        const nameElement = document.createElement("h4");
        nameElement.classList.add("justified_gallery_info_name_DiLdg9gh");
        if (this.centerTitle) {
          nameElement.classList.add("justified_gallery_textCenter_3jzXfuVs");
        }
        nameElement.textContent = image?.title || "";

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add(`Gallery_item_info_description`);
        if (this.centerDescription) {
          descriptionElement.classList.add(
            "justified_gallery_textCenter_3jzXfuVs"
          );
        }
        descriptionElement.classList.add(`justified_gallery_ellipsis_q6ZD6Hq4`);
        descriptionElement.textContent = image?.description || "";

        infoElement.appendChild(nameElement);
        if (this.showDescription) {
          infoElement.appendChild(descriptionElement);
        }

        galleryItem.appendChild(infoElement);
      }

      const eListImage = {
        i,
        url: image.url,
        alt: image?.altText || `image${i}`,
      };

      galleryItem.appendChild(imageElement);
      this.galleryItems = [...this.galleryItems, eListImage];

      galleryItem.addEventListener("click", () => this.handleClick(i));
      fragment.appendChild(galleryItem);
      return galleryItem;
    });

    return galleryItems;
  }

  private justify(galleryItems: HTMLButtonElement[]) {
    const iterador = this.getIterador();
    this.updateProportions(iterador, galleryItems);
  }

  private getIterador(): number {
    const galleryOptions = {
      1000: 0.13,
      600: 0.18,
      0: 0.28,
    };

    const widthGallery = this.gallery.offsetWidth;
    const widthOption =
      widthGallery > 1000
        ? 1000
        : widthGallery > 600 && widthGallery < 1000
        ? 600
        : 0;
    const ratio = galleryOptions[widthOption];
    const iterador = widthGallery * ratio;

    return iterador;
  }

  private updateProportions(
    iterador: number,
    galleryItems: HTMLButtonElement[]
  ): void {
    galleryItems.forEach((item) => {
      const image = item.querySelector(
        ".justified_gallery_image_2EBybfL"
      ) as HTMLImageElement;
      image.onload = () => {
        const ratio = image.width / image.height;
        item.style.width = `${iterador * ratio}px`;
        item.style.flexGrow = `${ratio}`;
      };
    });
  }

  private handleClick(i: number) {
    this.lighbox.create(i, this.galleryItems);
  }
}

export const justified = (otions: GalleryOptions) => {
  const {
    element,
    images,
    showTitle = false,
    centerTitle = false,
    showDescription = false,
    centerDescription = false,
    separation = 1,
  } = otions;

  if (images.length === 0) {
    console.error("The image array is empty");
    return;
  }

  const validationsTypes = new ValidationsTypes();
  const lighbox = new Lighbox();
  const justifiedGallery = new JustifiedGallery(
    element,
    showTitle,
    showDescription,
    centerTitle,
    centerDescription,
    separation,
    validationsTypes,
    lighbox
  );
  justifiedGallery.addImages(images);
};

