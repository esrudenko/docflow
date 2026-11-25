export interface Act {
  id: string;
  transferId: string;
  number: string;
  amount: number;
  receivedAt: string | null;
  sentToPayAt: string | null;
  paidAt: string | null;
  fileName: string | null;
}
