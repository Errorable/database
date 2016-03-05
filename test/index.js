'use strict';

var assert = require('assert');
var errorableOrder = require('../lib');
var errorable = require('errorable');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableOrder, 'zh-CN').errors;
var enUsErrors = new Generator(errorableOrder, 'en-US').errors;

var errorCount = 0;

for (var k in cnErrors) {
  if (cnErrors[k] instanceof Object) {
    errorCount++;
  }
}

describe('errorable-database', function () {
  it('should have database errors in zh-CN!', function () {
    var count = 0;
    var errors = {
      DatabaseError: '数据库错误！'
    };
    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, cnErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });

  it('should have database errors in en-US!', function () {
    var count = 0;
    var errors = {
      DatabaseError: 'Database Error!'
    };

    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, enUsErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });
});
