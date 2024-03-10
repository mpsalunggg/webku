import { MenuType } from '@/types/menu';

export const Menu: MenuType[] = [
  {
    id: 1,
    name: 'About',
    path: '/'
  },
  {
    id: 2,
    name: 'Project',
    path: '/project'
  },
  {
    id: 3,
    name: 'Experience',
    path: '/experience'
  },
  {
    id: 4,
    name: 'Skill',
    path: '/skill'
  }
];

export const PathMenu = Menu.map(item => item.path);
