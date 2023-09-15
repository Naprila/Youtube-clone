import { GOOGLE_API } from "../api";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=" +
  GOOGLE_API;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const YOUTUBE_VIDEO_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API +
  "&id=";

export const CHANNEL_ID_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API +
  "&id=";


export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API +
  "&q=";


export const COMMENTS = [
  {
    id: 1,
    name: "Ram",
    text: "First-level comment 1",
    replies: [
      {
        id: 4,
        name: "Shyam",
        text: "Reply to comment 1",
        replies: [
          {
            id: 8,
            name: "Lakhan",
            text: "Nested reply to reply",
            replies: [],
          },
        ],
      },
      {
        id: 5,
        name: "Lalu",
        text: "Another reply to comment 1",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    name: "Vikram",
    text: "First-level comment 2",
    replies: [],
  },
  {
    id: 3,
    name: "Basanti",
    text: "First-level comment 3",
    replies: [
      {
        id: 6,
        name: "RamKalia",
        text: "Reply to comment 3",
        replies: [
          {
            id: 7,
            name: "Chotu",
            text: "Nested reply to comment 3",
            replies: [
              {
                id: 9,
                name: "Jaggu",
                text: "Even more nested reply",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];




var nameList = [
                'Time','Past','Future','Dev',
                'Fly','Flying','Soar','Soaring','Power','Falling',
                'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
                'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
                'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
                'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
                'Mine','Your','Worst','Enemy','Hostile','Force','Video',
                'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
                'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
                'Script','Writer','Near','Close','Open','Cube','Circle',
                'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
                'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
                'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
                'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
                'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
                'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
                'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
                'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
                'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
                'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
                'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
            ];
        
export const generate = () => {
      return nameList[Math.floor( Math.random() * nameList.length )];
  };

export const OFFSET_LIVE_CHAT = 40
export const OFFSET_INFINITE_SCROLL = 250



// fix the ButtonList 
// fix the sidebar nav, it should not triggered the windows scrollbar
// add loading box 