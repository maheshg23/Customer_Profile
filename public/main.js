var update = document.getElementById('update')
var del = document.getElementById('delete')

//Send the Update request when the button is clicked to the server and get the response from the server
update.addEventListener('click', function () {
	fetch('users', {
		method: 'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			'name': '',
			'email': 'changed@changed.com',
			'phone': 'phone'
		})
	})
	.then(res => {
		if (res.ok) return res.json()
	})
	.then(data => {
		console.log(data)
		window.location.reload(true)
	})
})

//Send the Delete request when the button is clicked to the server and get the response from the server
del.addEventListener('click', function () {
	fetch('users', {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'name': 'aa'
		})
	})
	.then(res => {
		if (res.ok) return res.json()
	}).
	then(data => {
		console.log(data)
		window.location.reload(true)
	})
})