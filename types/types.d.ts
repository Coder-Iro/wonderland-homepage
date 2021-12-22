interface IContent {
  title: string;
  color: color;
  desc: string;
}

interface Content {
  title: string;
  id: string;
  color: color;
  desc: string;
  subcontents?: SubContent[];
}

interface SubContent {
  title: string;
  color?: color;
  desc: string;
}

type color =
  | 'green'
  | 'blue'
  | 'red'
  | 'orange'
  | 'grey'
  | 'cyan'
  | 'yellow'
  | 'pink'
  | 'normal'
  | 'superior'
  | 'epic'
  | 'mysterious'
  | 'wonderous'
  | 'npc'
  | 'mob';
