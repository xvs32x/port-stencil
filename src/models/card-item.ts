export interface CardItemI {
  id: number;
  name: string;
  preview: string;
  tags: string;
  images: {
    name: string;
    src: string[]
  }[];
}
