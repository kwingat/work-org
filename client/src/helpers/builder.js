import dayjs from 'dayjs';

export const START_YEAR = 2020;
export const NUM_OF_YEARS = 3;
export const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const MONTHS_PER_YEAR = 12;
export const QUARTERS_PER_YEAR = 4;
export const MONTHS_PER_QUARTER = 3;
export const NUM_OF_MONTHS = NUM_OF_YEARS * MONTHS_PER_YEAR;
export const MAX_TRACK_START_GAP = 4;
export const MAX_ELEMENT_GAP = 8;
export const MAX_MONTH_SPAN = 8;
export const MIN_MONTH_SPAN = 2;
export const NUM_OF_TRACKS = 20;
export const MAX_NUM_OF_SUBTRACKS = 5;

export const fill = (n) => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }
  return arr;
};

const COLORS = [
  'FF005D',
  '0085B6',
  '0BB4C1',
  '00D49D',
  'FEDF03',
  '233D4D',
  'FE7F2D',
  'FCCA46',
  'A1C181',
  '579C87',
];

export const randomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];

let color = -1;
export const nextColor = () => {
  color = (color + 1) % COLORS.length;
  return COLORS[color];
};

// let prevColor = null
// export const nextRandomColor = () => {
//   let c = randomColor()
//   while (c === prevColor) {
//     c = randomColor()
//   }
//   prevColor = c
//   return c
// }

// export const randomColor = () => {
//   const LETTERS = '0123456789ABCDEF'
//   let color = ''
//   for (let i = 0; i < 6; i += 1) {
//     color += LETTERS[Math.floor(Math.random() * 16)]
//   }
//   return color
// }

export const hexToRgb = (hex) => {
  const v = parseInt(hex, 16);
  const r = (v >> 16) & 255;
  const g = (v >> 8) & 255;
  const b = v & 255;
  return [r, g, b];
};

export const colourIsLight = (r, g, b) => {
  const a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return a < 0.5;
};

export const addMonthsToYear = (year, monthsToAdd) => {
  let y = year;
  let m = monthsToAdd;
  while (m >= 12) {
    m -= 12;
    y += 1;
  }
  return { year: y, month: m + 1 };
};

export const addMonthsToYearAsDate = (year, monthsToAdd) => {
  const r = addMonthsToYear(year, monthsToAdd);
  return new Date(`${r.year}-${r.month}`);
};

// Credit: https://jsfiddle.net/katowulf/3gtDf/
const ADJECTIVES = [
  'adamant',
  'adroit',
  'amatory',
  'animistic',
  'antic',
  'arcadian',
  'baleful',
  'bellicose',
  'bilious',
  'boorish',
  'calamitous',
  'caustic',
  'cerulean',
  'comely',
  'concomitant',
  'contumacious',
  'corpulent',
  'crapulous',
  'defamatory',
  'didactic',
  'dilatory',
  'dowdy',
  'efficacious',
  'effulgent',
  'egregious',
  'endemic',
  'equanimous',
  'execrable',
  'fastidious',
  'feckless',
  'fecund',
  'friable',
  'fulsome',
  'garrulous',
  'guileless',
  'gustatory',
  'heuristic',
  'histrionic',
  'hubristic',
  'incendiary',
  'insidious',
  'insolent',
  'intransigent',
  'inveterate',
  'invidious',
  'irksome',
  'jejune',
  'jocular',
  'judicious',
  'lachrymose',
  'limpid',
  'loquacious',
  'luminous',
  'mannered',
  'mendacious',
  'meretricious',
  'minatory',
  'mordant',
  'munificent',
  'nefarious',
  'noxious',
  'obtuse',
  'parsimonious',
  'pendulous',
  'pernicious',
  'pervasive',
  'petulant',
  'platitudinous',
  'precipitate',
  'propitious',
  'puckish',
  'querulous',
  'quiescent',
  'rebarbative',
  'recalcitant',
  'redolent',
  'rhadamanthine',
  'risible',
  'ruminative',
  'sagacious',
  'salubrious',
  'sartorial',
  'sclerotic',
  'serpentine',
  'spasmodic',
  'strident',
  'taciturn',
  'tenacious',
  'tremulous',
  'trenchant',
  'turbulent',
  'turgid',
  'ubiquitous',
  'uxorious',
  'verdant',
  'voluble',
  'voracious',
  'wheedling',
  'withering',
  'zealous',
];
const NOUNS = [
  'ninja',
  'chair',
  'pancake',
  'statue',
  'unicorn',
  'rainbows',
  'laser',
  'senor',
  'bunny',
  'captain',
  'nibblets',
  'cupcake',
  'carrot',
  'gnomes',
  'glitter',
  'potato',
  'salad',
  'toejam',
  'curtains',
  'beets',
  'toilet',
  'exorcism',
  'stick figures',
  'mermaid eggs',
  'sea barnacles',
  'dragons',
  'jellybeans',
  'snakes',
  'dolls',
  'bushes',
  'cookies',
  'apples',
  'ice cream',
  'ukulele',
  'kazoo',
  'banjo',
  'opera singer',
  'circus',
  'trampoline',
  'carousel',
  'carnival',
  'locomotive',
  'hot air balloon',
  'praying mantis',
  'animator',
  'artisan',
  'artist',
  'colorist',
  'inker',
  'coppersmith',
  'director',
  'designer',
  'flatter',
  'stylist',
  'leadman',
  'limner',
  'make-up artist',
  'model',
  'musician',
  'penciller',
  'producer',
  'scenographer',
  'set decorator',
  'silversmith',
  'teacher',
  'auto mechanic',
  'beader',
  'bobbin boy',
  'clerk of the chapel',
  'filling station attendant',
  'foreman',
  'maintenance engineering',
  'mechanic',
  'miller',
  'moldmaker',
  'panel beater',
  'patternmaker',
  'plant operator',
  'plumber',
  'sawfiler',
  'shop foreman',
  'soaper',
  'stationary engineer',
  'wheelwright',
  'woodworkers',
];

const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const months = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

export const randomTitle = () =>
  `${ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]} ${
    NOUNS[Math.floor(Math.random() * NOUNS.length)]
  }`;

export const getQuarter = (date) => {
  return {
    year: date.getFullYear(),
    quarter: Math.ceil((date.getMonth() + 1) / 3),
  };
};

export const buildQuarters = (sDate, eDate) => {
  if (sDate > eDate) {
    var t = eDate;
    eDate = sDate;
    sDate = t;
  }

  sDate = new Date(sDate);
  sDate.setDate(2);
  var startQ = getQuarter(sDate);
  var endQ = getQuarter(eDate);
  var result = [startQ];

  while (JSON.stringify(startQ) !== JSON.stringify(endQ)) {
    sDate.setMonth(sDate.getMonth() + 3);
    startQ = getQuarter(sDate);
    result.push(startQ);
  }
  return result;
};

export const buildQuarterCells = (start, end) => {
  const quarters = buildQuarters(start, end).map((q) => {
    const s = addMonthsToYearAsDate(q.year, (q.quarter - 1) * 3);
    const e = addMonthsToYearAsDate(q.year, q.quarter * 3);
    return {
      id: `${q.year}-q${q.quarter}`,
      title: `Q${q.quarter} ${q.year}`,
      start: s,
      end: e,
    };
  });
  return quarters;
};

const getMonths = (quarters) =>
  quarters.map((quarter) => months[quarter - 1]).flat();

const convertMonthToShort = (months) => {
  return months.map((month) => monthsShort[month - 1]);
};

export const buildMonthCells = (start, end) => {
  const quarters = buildQuarters(start, end).map((q) => q.quarter);
  const months = convertMonthToShort(getMonths(quarters));
  return months.map((month) => ({
    id: `m${month}`,
    title: month,
    start,
    end,
  }));
};

export const buildTimebar = (to, from) => [
  {
    id: 'quarters',
    title: 'Quarters',
    cells: buildQuarterCells(to, from),
    style: {},
  },
  {
    id: 'months',
    title: 'Months',
    cells: buildMonthCells(to, from),
    useAsGrid: true,
    style: {},
  },
];

export const buildElement = ({ trackId, start, end, i }) => {
  const bgColor = nextColor();
  const color = colourIsLight(...hexToRgb(bgColor)) ? '#000000' : '#ffffff';
  return {
    id: `t-${trackId}-el-${i}`,
    title: randomTitle(),
    start,
    end,
    style: {
      backgroundColor: `#${bgColor}`,
      color,
      borderRadius: '4px',
      boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
      textTransform: 'capitalize',
    },
  };
};

export const buildTrackStartGap = () =>
  Math.floor(Math.random() * MAX_TRACK_START_GAP);
export const buildElementGap = () =>
  Math.floor(Math.random() * MAX_ELEMENT_GAP);

export const buildElements = (trackId) => {
  const v = [];
  let i = 1;
  let month = buildTrackStartGap();

  while (month < NUM_OF_MONTHS) {
    let monthSpan =
      Math.floor(Math.random() * (MAX_MONTH_SPAN - (MIN_MONTH_SPAN - 1))) +
      MIN_MONTH_SPAN;

    if (month + monthSpan > NUM_OF_MONTHS) {
      monthSpan = NUM_OF_MONTHS - month;
    }

    const start = addMonthsToYearAsDate(START_YEAR, month);
    const end = addMonthsToYearAsDate(START_YEAR, month + monthSpan);
    v.push(
      buildElement({
        trackId,
        start,
        end,
        i,
      }),
    );
    const gap = buildElementGap();
    month += monthSpan + gap;
    i += 1;
  }

  return v;
};

export const buildSubtrack = (trackId, subtrackId) => ({
  id: `track-${trackId}-${subtrackId}`,
  title: `Subtrack ${subtrackId}`,
  elements: buildElements(subtrackId),
});

export const buildTrack = (trackId) => {
  const tracks = fill(Math.floor(Math.random() * MAX_NUM_OF_SUBTRACKS) + 1).map(
    (i) => buildSubtrack(trackId, i + 1),
  );
  return {
    id: `track-${trackId}`,
    title: `Track ${trackId}`,
    elements: buildElements(trackId),
    tracks,
    // hasButton: true,
    // link: 'www.google.com',
    isOpen: false,
  };
};

// const operations = [
//   {
//     _id: '651b0c3bbe754f3619ea3812',
//     name: 'CR #85 BIT Tool Changes',
//     devComp: '2023-10-02T04:00:00.000Z',
//     uatStart: '2023-10-02T04:00:00.000Z',
//     uatComp: '2023-10-02T04:00:00.000Z',
//     implement: '2023-10-02T04:00:00.000Z',
//     __v: 0,
//   },
//   {
//     _id: '651b6374d51cab38fd57fb3f',
//     name: 'Truli Inst',
//     devComp: '2023-09-07T04:00:00.000Z',
//     uatStart: '2023-09-09T04:00:00.000Z',
//     uatComp: '2023-10-10T04:00:00.000Z',
//     implement: '2024-01-05T05:00:00.000Z',
//     __v: 0,
//   },
// ];

export const getEarliestStart = (operations) => {
  const dates = operations.map((operation) => new Date(operation.implement));
  const earliest = new Date(Math.min(...dates));
  return earliest;
};

export const getLatestEnd = (operations) => {
  const dates = operations.map((operation) => new Date(operation.implement));
  const latest = new Date(Math.max(...dates));
  return latest;
};
