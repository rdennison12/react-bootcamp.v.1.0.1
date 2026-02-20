import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

const generateNewUuid = () => uuid();

export const newMessage = ({text, username}) => ({
    type: NEW_MESSAGE,
    item: {id: generateNewUuid(), timestamp: Date.now(), text, username}
})