# WebPack
WebPack is a module bundler. I worked with .js, .css, .html to learn webpack.

Learning topic :

1)What is webpack?
	webpack is a module bundler. Too many js file binded into a single module for less complexity.
    Too much js module causes the response speed slow. Overcome this problem, webpack is created.
	We can bundle not only js but also many format of files such as, .css, .scss, .html, .png, .jpeg.
	and many more.

2)What I learned in this section?
	For my own purpose I complete the webpack learning process with .js, .html, .css file only.
	And, learn how to create e live server using webpack-dev-server. And learn how babel works.
	
	
All the instructions are on the webpack documentation page (https://webpack.js.org/concepts/)

Moreover I fall with some problems, when I complete this. For saving my error and ways of solving, I write 
this manual. Basically, it's for personal manual.


In the JS part and Live Server part I haven't face any problem.


Problems:

 1.Bable:
	For converting Es6 to Es5 babel is needed. But, I actually couldn't install it. Finally, the line
		'npm install --save-dev @babel/core @babel/preset-env' helps me. It is from the link (https://github.com/babel/gulp-babel/issues/124)
		
	
 2.CSS Plugin:
	When I include mini-css-extract-plugin, It shows error because I wrote 'MiniCssExtractPlugin' instead of
	'MiniCssExtractPlugin.loader'
	
	
 3.Html plugin:
	This feature made myself mad.
	For a single page application , loader : HtmlWebpackPlugin.loader can be helpful, in that time loader:html-loader 
	shows 'child compilation Failed' error. After searching 3 hours for solving this problem, I can learn that, loader : HtmlWebpackPlugin.loader
	can works fine with single page application. So, I decide to do work with that. But this link saves my time, 
	(https://stackoverflow.com/questions/43494794/webpack-html-webpack-plugin-error-child-compilation-failed)
	in the package.json I also change "less": "3.9.0" this.
	
That's all. Hope oneday I will face that problem again, and thank me for writting the problems that I have faced and solved.

Special thanks to H.M.Nayem Bhai, for making a outstanding tutorial. (https://www.youtube.com/watch?v=PhuwlYrd-XU)
