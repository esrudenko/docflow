export interface Approval {
  id: string;
  transferId: string;
  organizationId: string;
  personId: string | null;
  approvedAt: string;
  validDays: number;
}
