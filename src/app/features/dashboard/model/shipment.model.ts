export interface Shipment {
  id: string;
  trackingId: string;
  customerName: string;
  customerLogo: string; 
  origin?: string; 
  destination?: string;
  route?: string; 
  eta: string;
  status: 'In Transit' | 'Delivered' | 'Delayed' | 'Exception' | 'Pending' | 'Incident';
}