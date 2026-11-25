export interface Letter {
  id: string;
  type: string;
  number: string;
  signetAt: string;
  organizationId: string | null;
  fileName: string | null;
  revisionId: string | null;
  transferId: string | null;
}
