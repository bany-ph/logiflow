import { Card } from "../model/card.model";

export const DASHBOARD_KPIS_MOCK: Card[] = [
    {
      title: 'Total Active Shipments', numberData: 1240, percentageData: 5,logo: 'local_shipping', logoColor: 'blue', trending: true
    },
    {
      title: 'In transit', numberData: 845, percentageData: 12, logo: 'near_me',logoColor: 'indigo', trending: true
    },
    {
      title: 'Exceptions', numberData: 12, percentageData: 2, logo: 'warning',logoColor: 'red', trending: false
    },
    {
      title: 'Revenue(MTD)', numberData: 450, percentageData:8, logo: 'payments', logoColor: 'emerald', trending: true
    }

    ];