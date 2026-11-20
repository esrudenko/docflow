export interface Organization {
  id: string;
  shortName: string;
  fullName: string | null;
  address: string | null;
  postalCode: string | null;
  phone: string | null;
}
