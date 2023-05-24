type Colum = {
	title: string;
	dataIndex: string;
	align: 'left' | 'right' | 'center';
};

export const colums: Colum[] = [
	{
		title: 'Id',
		dataIndex: 'id',
		align: 'left',
	},
	{
		title: 'Product',
		dataIndex: 'product',
		align: 'center',
	},
	{
		title: 'Price',
		dataIndex: 'price',
		align: 'right',
	},
];

export const key = 'id';

