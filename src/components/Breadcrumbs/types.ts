export interface Crumbs {
  name: string;
  link: string;
}

export interface BreadCrumbsProps {
  isActiveLast?: boolean;
  variant: 'crumbs_dark' | 'crumbs_light';
  crumbs: Crumbs[];
}
