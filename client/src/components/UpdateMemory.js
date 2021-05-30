import React, { useState, useEffect } from 'react';
import ReactFileBase64 from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { updateMemory } from '../actions/memoryActions';

import { useDispatch } from 'react-redux';

import { fetchMemory } from '../axios/index.js';

const UpdateMemory = ({ id }) => {
	const dispatch = useDispatch();
	const [memoryData, setMemoryData] = useState({
		title: '',
		content: '',
		creator: '',
		images: '',
	});

	useEffect(() => {
		const getMemo = async () => {
			const { data } = await fetchMemory(id);
			setMemoryData(data);
		};
		getMemo();
	}, [id]);

	const history = useHistory();

	return (
		<div>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(updateMemory(id, memoryData));
					history.push('/');
				}}
			>
				<Form.Group className="text-center p-2">
					<h1>Anıyı Güncelle</h1>
				</Form.Group>
				<Form.Group>
					<Form.Label>Başlık</Form.Label>
					<Form.Control
						name="title"
						type="text"
						value={memoryData.title}
						onChange={(e) => setMemoryData({ ...memoryData, title: e.target.value })}
					></Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Yazar</Form.Label>
					<Form.Control
						name="author"
						type="text"
						value={memoryData.creator}
						onChange={(e) => setMemoryData({ ...memoryData, creator: e.target.value })}
					></Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Anınız</Form.Label>
					<Form.Control
						name="content"
						type="text"
						as="textarea"
						value={memoryData.content}
						rows={3}
						onChange={(e) => setMemoryData({ ...memoryData, content: e.target.value })}
					></Form.Control>
				</Form.Group>
				<Form.Group>
					<ReactFileBase64
						type="file"
						multiple={false}
						onDone={({ base64 }) => setMemoryData({ ...memoryData, images: base64 })}
					/>
				</Form.Group>
				<Button type="submit" block>
					Güncelle
				</Button>
			</Form>
		</div>
	);
};

export default UpdateMemory;
