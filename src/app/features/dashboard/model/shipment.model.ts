export interface Shipment {
  id: string;
  trackingId: string;
  customerName: string;
  customerLogo: string;
  route: string;
  eta: string;
  status: 'In Transit' | 'Delivered' | 'Delayed' | 'Exception';
}