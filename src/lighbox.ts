import { Controls, GalleryItem } from "./types";

export interface LighboxTemplate {
  create(
    position: number,
    galleryItems: GalleryItem[],
    imageBorder: boolean
  ): void;
}

export class Lighbox implements LighboxTemplate {
  private currenImage: HTMLImageElement | null;
  private currenPosition: number;
  private galleryItems: GalleryItem[];
  private container: HTMLDivElement | null;
  constructor() {
    this.currenPosition = 0;
    this.currenImage = null;
    this.galleryItems = [];
    this.container = null;
    this.handleKey = this.handleKey.bind(this);
  }
  public create(position: number, galleryItems: GalleryItem[]): void {
    this.currenPosition = position;
    this.galleryItems = galleryItems;
    const container = this.canvas();
    this.container = container;
    const { close, prevControl, nextControl } = this.controls();
    const image = this.mainImage(position, galleryItems);
    close.addEventListener("click", () => this.close());
    nextControl.addEventListener("click", () => this.next());
    prevControl.addEventListener("click", () => this.prev());
    container.appendChild(close);
    container.appendChild(prevControl);
    container.appendChild(image);
    this.currenImage = image;
    container.appendChild(nextControl);
    document.body.addEventListener("keydown", this.handleKey);
  }

  private canvas(): HTMLDivElement {
    const container = document.createElement("div");
    container.setAttribute("class", "justified_gallery_lightbox_VvJGcq6K");
    document.body.appendChild(container);
    document.body.style.overflow = "hidden";
    return container;
  }

  private controls(): Controls {
    const close = document.createElement("div");
    close.setAttribute("id", "justified_gallery_lightbox_close_SjyDWg5J");

    const justified_gallery_lightbox_closeOne_NUpR7FcV =
      document.createElement("div");
    justified_gallery_lightbox_closeOne_NUpR7FcV.setAttribute(
      "class",
      "justified_gallery_lightbox_close_THt5e3Xu justified_gallery_lightbox_closeOne_NUpR7FcV"
    );

    const justified_gallery_lightbox_closeTwo_q7Dn4nCy =
      document.createElement("div");
    justified_gallery_lightbox_closeTwo_q7Dn4nCy.setAttribute(
      "class",
      "justified_gallery_lightbox_close_THt5e3Xu justified_gallery_lightbox_closeTwo_q7Dn4nCy"
    );

    const prevControl = document.createElement("div");
    prevControl.setAttribute(
      "class",
      "justified_gallery_lightbox_controls_zftU6VQV"
    );
    prevControl.setAttribute(
      "id",
      "justified_gallery_lightbox_controls_prev_enYH3Zy9"
    );

    const prevArrow = document.createElement("div");
    prevArrow.setAttribute(
      "class",
      "justified_gallery_lightbox_controls_arrow_WcfEYp9G justified_gallery_lightbox_controls_prev_dNeM8z5k"
    );

    const nextControl = document.createElement("div");
    nextControl.setAttribute(
      "class",
      "justified_gallery_lightbox_controls_zftU6VQV"
    );
    nextControl.setAttribute(
      "id",
      "justified_gallery_lightbox_controls_next_K4AnK6TP"
    );

    const nextArrow = document.createElement("div");
    nextArrow.setAttribute(
      "class",
      "justified_gallery_lightbox_controls_arrow_WcfEYp9G justified_gallery_lightbox_controls_next_HmfaGP4Z"
    );

    prevControl.appendChild(prevArrow);
    nextControl.appendChild(nextArrow);
    close.appendChild(justified_gallery_lightbox_closeOne_NUpR7FcV);
    close.appendChild(justified_gallery_lightbox_closeTwo_q7Dn4nCy);

    return {
      close,
      prevControl,
      nextControl,
    };
  }

  private mainImage(
    position: number,
    galleryItems: GalleryItem[]
  ): HTMLImageElement {
    const image = galleryItems[position];
    const img = document.createElement("img");
    img.classList.add("justified_gallery_lightbox_image_fw3jBBTJ");
    img.setAttribute("src", image.url);
    img.setAttribute("alt", image.alt);
    this.currenImage = img;
    return img;
  }

  private updateImage(position: number, galleryItems: GalleryItem[]): void {
    if (this.currenImage)
      this.currenImage.setAttribute("src", galleryItems[position].url);
  }

  private next(): void {
    const galleryItems = this.galleryItems;
    const position = this.currenPosition;
    const total = galleryItems.length - 1;
    if (position < total) {
      this.currenPosition++;
      this.updateImage(this.currenPosition, galleryItems);
    } else if (position >= total) {
      this.currenPosition = 0;
      this.updateImage(this.currenPosition, galleryItems);
    }
  }

  private prev(): void {
    const galleryItems = this.galleryItems;
    const position = this.currenPosition;
    if (position > 0) {
      this.currenPosition--;
      this.updateImage(this.currenPosition, galleryItems);
    } else if (position === 0) {
      this.currenPosition = galleryItems.length - 1;
      this.updateImage(this.currenPosition, galleryItems);
    }
  }

  private close(): void {
    const container = this.container;
    if (container) {
      document.body.removeChild(container);
      document.body.style.overflow = "visible";
      document.body.removeEventListener("keydown", this.handleKey);
    }
  }

  private handleKey(e: KeyboardEvent) {
    // e.preventDefault();
    const rightArrow = e.which === 39 || e.keyCode === 39;
    const leftArrow = e.which === 37 || e.keyCode === 37;
    const keyEsc = e.which === 27 || e.keyCode === 27;
    if (rightArrow) {
      this.next();
    } else if (leftArrow) {
      this.prev();
    } else if (keyEsc) {
      this.close();
    }
  }
}
