var socket = io();

function resetButton() {
    socket.emit('reset')
}

function targetButton() {
    socket.emit('reset')
}

function startButton() {
	fetch('/start-program', {
		method: 'post',
		body: new FormData(document.getElementById('programYAML')),
		credentials: 'include'
	});
}