import BBCodeParser from 'ts-bbcode-parser';
const color = [
  'green',
  'blue',
  'red',
  'orange',
  'grey',
  'cyan',
  'yellow',
  'pink',
  'normal',
  'superior',
  'epic',
  'mysterious',
  'wonderous',
  'npc',
  'mob',
];
const bbcode = new BBCodeParser();

color.forEach(c => {
  bbcode
    .add(`\\[${c}\\](.+?)\\[/${c}\\]`, `<span class="${c}">$1</span>`)
    .add(
      `\\[${c.toUpperCase()}\\](.+?)\\[/${c.toUpperCase()}\\]`,
      `<strong class="${c}">$1</strong>`
    );
});
bbcode.add(`\\[line\\]`, `<h3 class="title"></h3>`);

export default bbcode.parse;

/*export default function bbcode(str: string): string {
  color.forEach(c => {
    str = str.replace(new RegExp(`\\[${c}\\]`, 'g'), `<span class="${c}">`);
    str = str.replace(new RegExp(`\\[/${c}\\]`, 'g'), `</span>`);
    str = str.replace(
      new RegExp(`\\[${c.toUpperCase()}\\]`, 'g'),
      `<strong class="${c}">`
    );
    str = str.replace(
      new RegExp(`\\[/${c.toUpperCase()}\\]`, 'g'),
      `</strong>`
    );
    str = str.replace(new RegExp('\n', 'g'), '<br>');
  });
  return str;
}8*/
