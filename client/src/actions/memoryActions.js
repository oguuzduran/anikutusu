import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constrants/actionsConstants';

import * as API from '../axios';

export const fetchMemories = () => async (dispatch) => {
	try {
		const { data } = await API.fetchMemories();

		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createMemory = (memory) => async (dispatch) => {
	try {
		const { data } = await API.createMemory(memory);

		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteMemory = (id) => async (dispatch) => {
	try {
		await API.deleteMemory(id);
		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const updateMemory = (id, updatedMemory) => async (dispatch) => {
	try {
		const { data } = await API.updateMemory(id, updatedMemory);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};
