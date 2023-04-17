import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';


const navConfiguration = [
  {
    title: 'Home',
    path: '/home',
    icon: <InboxIcon />,
    children: [],
  },
  {
    title: 'App',
    path: '/app',
    icon: <DraftsIcon />,
    children: [],
  },
  {
    title: 'Math',
    path: '',
    icon: <SendIcon />,
    children: [
      {
        title: 'Itegral',
        path: '/app',
        icon: <StarBorder />,
        children: [],
      },
      {
        title: 'Circle',
        path: '/app',
        icon: <StarBorder />,
        children: [],
      },
    ],
  },
  {
    title: 'App',
    path: '/app',
    icon: <StarBorder />,
    children: [],
  },
];

export default navConfiguration;
