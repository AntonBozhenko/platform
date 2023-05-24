import React, {useState, type FC} from 'react';
import styles from './App.module.css';
import {Button, Input, Modal, Typography} from 'antd';
import {colums, key} from './initial-data/report-config';
import {data, type Item} from './initial-data/data';
import ProTable from '@ant-design/pro-table';
import {closeItemModal, getDataForItemModal, showItemModal} from './functions/App.ItemModal.functions';
import {showEditModal, type EditModalData, editTitleHandleChange, editTitles} from './functions/App.EditModal.functions';
const {Title} = Typography;

export const App: FC = () => {
	const [columns, setColumns] = useState(colums);

	const [isItemModalOpen, setIsItemModalOpen] = useState(false);
	const [itemModalData, setItemModalData] = useState<Item>();

	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [editModalData, setEditModalData] = useState<EditModalData>();

	return (
		<>
			<Title level={3} className={styles.title}>{data.name} {data.code}</Title>

			<div className={styles.button}>
				<Button onClick={() => {
					showEditModal(setIsEditModalOpen, setEditModalData, columns);
				}}>
				Редактировать названия колонок
				</Button>
			</div>

			<ProTable
				columns={columns}
				dataSource={data.items}
				rowKey={key}
				search={false}
				options={{
					reload: false,
				}
				}
				onRow={record => ({
					onDoubleClick() {
						showItemModal(setIsItemModalOpen, setItemModalData, record);
					},
				})}
			/>

			<Modal
				open={isItemModalOpen}
				title={'Подробная информация'}
				onOk={() => {
					closeItemModal(setIsItemModalOpen, setItemModalData);
				}}
				onCancel={() => {
					closeItemModal(setIsItemModalOpen, setItemModalData);
				}}
			>
				{itemModalData && getDataForItemModal(itemModalData).map(({key, value}) => (
					<p key={key}>{key} : {value}</p>
				))}
			</Modal>

			<Modal
				open={isEditModalOpen}
				title={'Редактирование названия колонок'}
				onOk={() => {
					if (editModalData) {
						editTitles(setIsEditModalOpen, editModalData, setColumns);
					}
				}}
				onCancel={() => {
					setIsEditModalOpen(false);
				}}
			>
				{editModalData?.newTitle && editModalData.newTitle.map((el, i) => (
					<Input type='text' key={i} value={el} onChange={event => {
						editTitleHandleChange(event, setEditModalData, i);
					}} />
				))}
			</Modal>
		</>
	);
};

