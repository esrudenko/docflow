export interface Transfer {
  id: string;
  setId: string;
  revisionId: string;
  senderPersonId: string | null;
  toOrganizationId: string;
  receiverPersonId: string | null;
  sentAt: string;
  returnedAt: string | null;
  note: string;
  approvalId: string | null;
}
