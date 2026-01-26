export interface Customer {
  id: string;
  name: string;
  logo: string;
  type: string; 
  contactName: string;
  contactImage: string;
  activeShipments: number;
  status: 'Active' | 'Inactive' | 'Pending';
}