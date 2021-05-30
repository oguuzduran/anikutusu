import React from 'react';
import moment from 'moment';

//Style imp
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import { useDispatch } from 'react-redux';

//imp fonctions
import { deleteMemory } from '../actions/memoryActions';

//moment tr lang
import trLocale from 'moment/locale/tr';
moment.updateLocale('tr', trLocale);

const Memory = ({ memory }) => {
	const dispatch = useDispatch();

	return (
		<Card className="rounded py-3 my-3">
			<Card.Img variant="top" src={memory.images} />
			<Card.Body>
				<Card.Title style={{ color: 'darkblue' }}>{memory.title}</Card.Title>
				<Card.Text>{memory.content}</Card.Text>
				<Card.Title>
					<span style={{ color: 'darkblue' }}>Yazar: </span>
					{memory.creator}
				</Card.Title>
				<Card.Subtitle>{moment(memory.createdAt).fromNow()}</Card.Subtitle>
			</Card.Body>
			<Card.Footer
				style={{ display: 'flex', justifyContent: 'space-between' }}
				className="bg-white pb-0"
			>
				<LinkContainer to={`/update/${memory._id}`} style={{ cursor: 'pointer' }}>
					<MdModeEdit color="blue" size={24} />
				</LinkContainer>
				<LinkContainer to="/" style={{ cursor: 'pointer' }}>
					<MdDelete
						color="red"
						size={24}
						onClick={() => {
							dispatch(deleteMemory(memory._id));
						}}
					/>
				</LinkContainer>
			</Card.Footer>
		</Card>
	);
};

export default Memory;
