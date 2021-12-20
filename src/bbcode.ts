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
export default function bbcode(str: string): string {
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
}
