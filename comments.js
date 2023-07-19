// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Start web server
// 5. Create controller
// 6. Create model
// 7. Create view
// 8. Create template
// 9. Create partials
// 10. Create public folder
// 11. Create CSS file
// 12. Create JS file
// 13. Create JSON file

// 1. Create web server
var express = require('express');
var app = express();

// 2. Create router
var router = express.Router();

// 5. Create controller
var commentsController = require('./controllers/commentsController');

// 6. Create model
var Comment = require('./models/comment');

// 7. Create view
app.set('view engine', 'ejs');

// 8. Create template
app.set('views', './views');

// 9. Create partials
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 10. Create public folder
app.use(express.static('public'));

// 11. Create CSS file
// 12. Create JS file
// 13. Create JSON file

// 3. Create route
router.get('/', commentsController.index);

router.get('/comments', commentsController.index);

router.get('/comments/:id', commentsController.show);

router.post('/comments', urlencodedParser, commentsController.create);

router.put('/comments/:id', urlencodedParser, commentsController.update);

router.delete('/comments/:id', commentsController.destroy);

// 4. Start web server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});