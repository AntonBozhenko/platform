import {type Dispatch} from 'react';
import {type Colum} from '../initial-data/report-config';

export type EditModalData = {oldTitle: string[]; newTitle: string[]};

const getTitles = (columns: Colum[]): EditModalData => {
	const titles: EditModalData = {oldTitle: [], newTitle: []};
	columns.forEach(el => {
		titles.oldTitle.push(el.title);
		titles.newTitle.push(el.title);
	});

	return titles;
};

export const showEditModal = (
	setIsEditModalOpen: Dispatch<React.SetStateAction<boolean>>,
	setEditModalData: Dispatch<React.SetStateAction<EditModalData | undefined>>,
	columns: Colum[],
) => {
	setIsEditModalOpen(true);
	setEditModalData(getTitles(columns));
};

export const editTitleHandleChange = (
	event: React.ChangeEvent<HTMLInputElement>,
	setEditModalData: Dispatch<React.SetStateAction<EditModalData | undefined>>,
	index: number,
) => {
	setEditModalData(prev => {
		if (prev) {
			return {...prev, newTitle: prev.newTitle.map((el, i) => {
				if (i === index) {
					return event.target.value;
				}

				return el;
			})};
		}
	});
};

export const editTitles = (
	setIsEditModalOpen: Dispatch<React.SetStateAction<boolean>>,
	editModalData: EditModalData,
	setColumns: Dispatch<React.SetStateAction<Colum[]>>,
) => {
	const {oldTitle, newTitle} = editModalData;
	for (let i = 0; i < oldTitle.length; i += 1) {
		if (oldTitle[i] !== newTitle[i]) {
			// Тут логика обращения к серверу для изменения отчета (в базе или в файловом хранилище сервера)
			setColumns(prev => (prev.map(el => {
				if (el.title === oldTitle[i]) {
					return {...el, title: newTitle[i]};
				}

				return el;
			})));
		}
	}

	setIsEditModalOpen(false);
};
