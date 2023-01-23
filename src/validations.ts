export interface Types {
  isValidImageOpject(image: any): boolean;
}

export class ValidationsTypes implements Types {
  public isValidImageOpject(image: any): boolean {
    let valid = true;
    const properties = ["id", "url", "title", "description", "altText"];
    const keys = Object.keys(image);

    keys.forEach((key) => {
      if (!properties.includes(key)) {
        throw new Error(`${key} is not a valid property`);
        valid = false;
      }
    });

    if (typeof image !== "object") {
      throw new Error("image must be an object");
      valid = false;
    }
    if (typeof image.id !== "string") {
      throw new Error("id must be a string");
      valid = false;
    }
    if (typeof image.url !== "string") {
      throw new Error("url must be a string");
      valid = false;
    }
    if (image.altText !== undefined && typeof image.altText !== "string") {
      throw new Error("altText must be a string");
      valid = false;
    }
    if (image.title !== undefined && typeof image.title !== "string") {
      throw new Error("title must be a string");
      valid = false;
    }
    if (
      image.description !== undefined &&
      typeof image.description !== "string"
    ) {
      throw new Error("description must be a string");
      valid = false;
    }
    return valid;
  }
}
