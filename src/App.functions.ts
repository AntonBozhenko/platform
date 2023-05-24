import {type Dispatch} from 'react';
import {type Item} from './initial-data/data';

type ModalData = Array<{key: string; value: string | number}>;

export const showModal = (
	setIsModalOpen: Dispatch<React.SetStateAction<boolean>>,
	setModalData: Dispatch<React.SetStateAction<Item | undefined>>,
	record: Item,
) => {
	setIsModalOpen(true);
	setModalData(record);
};

export const closeModal = (
	setIsModalOpen: Dispatch<React.SetStateAction<boolean>>,
	setModalData: Dispatch<React.SetStateAction<Item | undefined>>) => {
	setIsModalOpen(false);
	setModalData(undefined);
};

export const getDataForModal = (item: Item): ModalData => {
	const data: ModalData = [];

	for (const key in item) {
		if (key in item) {
			data.push({key, value: item[key as keyof Item]});
		}
	}

	return data;
};
