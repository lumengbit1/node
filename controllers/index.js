let fn_index = async(ctx,next)=>{
	ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
};

let fn_signin = async(ctx,next)=>{
	let name = ctx.request.body.name || '';
	let password = ctx.request.body.password || '';

	console.log(`signin with name: ${name}, password: ${password}`);

	if(name === 'koa' && password === '12345'){
		ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
	}else{
		ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
	}
};

let get_fn = async(ctx,next)=>{
	ctx.render('index.html', {
		title: 'Welcome'
	});
};

let post_fn = async (ctx, next) => {
	let email = ctx.request.body.email || '';
	let	password = ctx.request.body.password || '';
	if (email === 'admin@example.com' && password === '123456') {
		// 登录成功:
		ctx.render('signin-ok.html', {
			title: 'Sign In OK',
			name: 'Mr Node'
		});
	} else {
		// 登录失败:
		ctx.render('signin-failed.html', {
			title: 'Sign In Failed'
		});
	}
};

module.exports = {
	'GET /': fn_index,
	'POST /signin': fn_signin
};