export interface GalleryOptions {
  element: HTMLDivElement;
  images: ImageOpject[];
  showTitle?: boolean;
  centerTitle?: boolean;
  showDescription?: boolean;
  centerDescription?: boolean;
  separation?: number;
}

export type Options = Omit<GalleryOptions, "element">;

/* Defining the interface for the ImageOpject. */
export interface ImageOpject {
  url: string;
  title?: string;
  description?: string;
  altText?: string;
}

export interface GalleryItem {
  i: number;
  url: string;
  alt: string;
}

export interface Controls {
  close: HTMLDivElement;
  prevControl: HTMLDivElement;
  nextControl: HTMLDivElement;
}
