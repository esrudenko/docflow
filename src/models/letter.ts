export interface Letter {
  id: string;
  type: string;
  number: string;
  signedAt: string;
  organizationId: string | null;
  fileName: string | null;
  revisionId: string | null;
  transferId: string | null;
}
