const rawcontents = import.meta.globEager!('./contents/[0-9][0-9]-*/00.ts');
const rawsubcontents = import.meta.globEager!(
  './contents/[0-9][0-9]-*/([0-9][1-9]|[1-9]0).ts'
);

const contents: Content[] = [];
for (const file in rawcontents) {
  const id = /(?<=\d{2}-).*(?=\/)/.exec(file)![0];
  contents.push({
    id: id,
    title: rawcontents[file].default.title,
    color: rawcontents[file].default.color,
    desc: rawcontents[file].default.desc,
    subcontents: Object.keys(rawsubcontents)
      .filter(key => key.includes(id))
      .map(key => rawsubcontents[key].default),
  });
}
export { contents };
