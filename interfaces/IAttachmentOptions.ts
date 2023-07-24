export interface AttachmentOption {
  name: string;
  description?: string;
  slug: string;
  icon?: React.ReactNode;
  iconDescripton?: string;
}

export interface AttachmentMatchOption {
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  isRecommended?: boolean;
}

export interface Step {
  step: number;
  title: string;
  subtitle?: string;
  options: AttachmentOption[];
  currentOption?: string;
  selectedOption: string | null;
}
