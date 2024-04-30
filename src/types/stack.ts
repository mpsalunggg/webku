export interface CardStackType {
  id: number;
  icon: string;
  title: string;
}

export interface CardStackProps {
  title: string;
  data: CardStackType[];
}
