export interface MenuType {
  id: number;
  name?: string;
  path: string;
}

export interface CardStackType {
  id: number;
  icon: string;
  title: string;
}

export interface CardStackProps {
  title: string;
  data: CardStackType[];
}
