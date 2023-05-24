export type Item = {
	id: number;
	product: string;
	price: number;
};

type Data = {
	name: string;
	code: string;
	items: Item[];
};

export const data: Data = {
	name: 'Sales report',
	code: '1489',
	items: [],
};

for (let i = 1; i <= 100; i += 1) {
	data.items.push({
		id: i,
		product: `product ${i}`,
		price: i + 10,
	});
}
