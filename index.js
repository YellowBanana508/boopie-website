require('express')()
	.use(require('express').static(__dirname + '/'))
	.use((_, res) => {
		res.status(404).sendFile(__dirname + '/404.html');
	})
	.listen(8080);
