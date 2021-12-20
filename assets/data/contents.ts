export interface Content {
  title: string;
  id: string;
  color: color;
  img: boolean;
  desc: string;
  //  subcontents?: SubContent[];
}

interface SubContent {
  title: string;
  color?: color;
  picture?: boolean;
  description: string;
}

const rawcontents = import.meta.globEager!('./contents/[0-9][0-9]-*/index.ts');
const rawimages = import.meta.globEager!('/assets/img/contents/*.png');
const images: Record<string, any> = {};
for (const rawimage in rawimages) {
  images[/(?<=\/assets\/img\/contents\/).*(?=[.]png)/.exec(rawimage)![0]] =
    rawimages[rawimage].default;
}

const contents: Content[] = [];
for (const file in rawcontents) {
  const id = /(?<=\d{2}-).*(?=\/)/.exec(file)![0];
  contents.push({
    id: id,
    title: rawcontents[file].content.title,
    color: rawcontents[file].content.color,
    desc: rawcontents[file].content.desc,
    img: images.hasOwnProperty(id),
  });
}
export { contents };
