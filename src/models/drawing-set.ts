export type SetStatus = 'draft' | 'in_development' | 'correction' | 'developed' | 'closed';

export interface CipherParts {
  contractNumber: string;
  queue: string;
  buildingNumber: string;
  mark: string;
}

export interface DrawingSet {
  id: string;
  shortName: string;
  fullName: string;
  cipherParts: CipherParts;
  customerOrganizationId: string | null;
  developerId: string | null;
  chiefEngineerId: string | null;
  status: SetStatus;
  createdAt: string;
}
