/**
 * { type: 'SET_MESSAGE', payload: 'the new message the user typed'}
 * { type: 'SET_MESSAGE', payload: 'message2'}
 */

 export function setMessage(newMessage) {
     return {
         type: 'SET_MESSAGE',
         payload: newMessage
     }
 }