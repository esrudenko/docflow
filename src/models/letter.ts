export type LetterType = 'incoming' | 'outgoing';

export interface Letter {
  id: string;
  type: LetterType;
  number: string;
  signedAt: string;
  organizationId: string;
  fileName: string | null;
  revisionId: string | null;
  transferId: string | null;
}
