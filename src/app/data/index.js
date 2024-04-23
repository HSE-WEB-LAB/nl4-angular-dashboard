import TotalSales from "../atoms/Svg/TotalSales.svg"
import ProductSold from "../atoms/Svg/ProductSold.svg"
import NewCustomers from "../atoms/Svg/NewCustomers.svg"
import TotalOrder from "../atoms/Svg/TotalOrder.svg"

export const dashboardData = {
    barChart: {
        id: 0,
        name: 'Number of sales',
        type: 'barChart',
        data: [
            {
                value: 50,
                data: '2023-11-06T06:48:39.741Z'
            },
            {
                value: 60,
                data: '2023-11-05T06:48:39.741Z'
            },
            {
                value: 77,
                data: '2023-11-04T06:48:39.741Z'
            },
            {
                value: 200,
                data: '2023-11-03T06:48:39.741Z'
            },
            {
                value: 180,
                data: '2023-11-03T06:48:39.741Z'
            },
            {
                value: 85,
                data: '2023-11-06T06:48:39.741Z'
            },
            {
                value: 12,
                data: '2023-11-05T06:48:39.741Z'
            },
            {
                value: 33,
                data: '2023-11-04T06:48:39.741Z'
            },
            {
                value: 125,
                data: '2023-11-03T06:48:39.741Z'
            },
            {
                value: 160,
                data: '2023-11-03T06:48:39.741Z'
            },
            {
                value: 50,
                data: '2023-11-06T06:48:39.741Z'
            },
        ],
    },
    todaySalesWidget: {
        id: 0,
        name: 'Today\'s Sales',
        type: 'widget',
        data: [
            {
                value: 10,
                name: 'Total Sales',
                icon: TotalSales,
                metrics: 'k',
                additionalInfo: '+8% from yesterday',
                color: 'FFE2E5',
            },
            {
                value: 560,
                name: 'Total Order',
                icon: TotalOrder,
                metrics: '',
                additionalInfo: '+5% from yesterday',
                color: 'FFF4DE',
            },
            {
                value: 1500,
                name: 'Product Sold',
                icon: ProductSold,
                metrics: '',
                additionalInfo: '+1,2% from yesterday',
                color: 'DCFCE7',
            },
            {
                value: 101,
                name: 'New Customers',
                icon: NewCustomers,
                metrics: '',
                additionalInfo: '0,5% from yesterday',
                color: 'F3E8FF',
            },
        ],
    }
};
