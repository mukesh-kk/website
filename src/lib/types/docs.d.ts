export type comparisonItem = {
  title: string;
  mobileTitle: string;
  value: number;
  slotName: string;
  hidden?: boolean;
};

export type AvailabilityItem = {
  label: string;
  isSaas: boolean;
};

export type PopularItem = {
  title: string;
  path: string;
  favorite: boolean;
  icon?: string;
};
