import Logic from './logic';

const field = document.querySelector('.field-container');
const logic = new Logic(field);

logic.drawBoard();
logic.moveGoblin();
