import {type Dispatch} from 'react';
import {type Item} from '../initial-data/data';

type ItemModalData = Array<{key: string; value: string | number}>;

export const showItemModal = (
	setIsItemModalOpen: Dispatch<React.SetStateAction<boolean>>,
	setItemModalData: Dispatch<React.SetStateAction<Item | undefined>>,
	record: Item,
) => {
	setIsItemModalOpen(true);
	setItemModalData(record);
};

export const closeItemModal = (
	setIsItemModalOpen: Dispatch<React.SetStateAction<boolean>>,
	setItemModalData: Dispatch<React.SetStateAction<Item | undefined>>) => {
	setIsItemModalOpen(false);
	setItemModalData(undefined);
};

export const getDataForItemModal = (item: Item): ItemModalData => {
	const data: ItemModalData = [];

	for (const key in item) {
		if (key in item) {
			data.push({key, value: item[key as keyof Item]});
		}
	}

	return data;
};
