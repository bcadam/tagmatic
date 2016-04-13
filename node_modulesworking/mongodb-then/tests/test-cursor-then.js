var assert = require('assert');
var insert = require('./insert');

insert([{
  hello:'world1'
},{
  hello:'world2'
}], function(db, done) {
  var cursor = db.a.find();
  cursor.then(function (docs) {
    assert.equal(docs[0].hello, 'world1');
    assert.equal(docs[1].hello, 'world2');
  })
  .catch(function(err) {
    assert(err instanceof Error);
    done();
  })
  .then(done);
});
