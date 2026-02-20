import uuid from 'uuid/v4';

const generateNewUuid = () => uuid();

export const createReaction = ({type, emoji, username, messageId}) => {
   return {
       type,
       item: {id: generateNewUuid(), timestamp: Date.now(), emoji, username, messageId}
   };
};