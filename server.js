var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
   'article-one':{
                title:'Article One',
                heading:'Article One',
                date:'Sep5,2016',
                content:`<p>
                This is the content for my first article.This is the content for my first article.This is the content for my first arti.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
               </p>
               <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
               </p>
              <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
              </p>`
                },
   'article-two':{
                title:'Article Two',
                heading:'Article Two',
                date:'Sep10,2016',
                content:`<p>
                This is the content for my second article.
                </p>`
              },
   'article-three':{
            title:'Article Three',
            heading:'Article Three',
            date:'Sep15,2016',
            content:`<p>This is the content for my third article.</p>`
            }
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'favicon.ico'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/Office-Girl-icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Office-Girl-icon.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/ajaxreq.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ajaxreq.js'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
    //articleName=article-one
    //articles[articleName]=={}content object for article one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
  });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
