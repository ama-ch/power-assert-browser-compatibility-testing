describe('assert', function() {
  it('should work.', function() {
    assert(true);
  });

  describe('.ok()', function() {
    it('should work.', function() {
      assert.ok(1 === 1);
    });
  });

  describe('.equal()', function() {
    it('should work.', function() {
      assert.equal(1, '1');
    });
  });

  describe('.notEqual()', function() {
    it('should work.', function() {
      assert.notEqual(0, 1);
    });
  });

  describe('.deepEqual()', function() {
    it('should work.', function() {
      assert.deepEqual([1, 2, 3], [1, 2, 3]);
    });
  });

  describe('.notDeepEqual()', function() {
    it('should work.', function() {
      assert.notDeepEqual([1, 2, 3], [1, 2, 4]);
    });
  });

  describe('.strictEqual()', function() {
    it('should work.', function() {
      assert.strictEqual(1, 1);
    });
  });

  describe('.notStrictEqual()', function() {
    it('should work.', function() {
      assert.notStrictEqual(1, '1');
    });
  });

  describe('.throws()', function() {
    it('should work.', function() {
      var pattern = new
      assert.throws(function() {
        throw new Error('Wrong value.');
      }, 'Wrong value.');
    });
  });

  describe('.doesNotThrow()', function() {
    it('should work.', function() {
      assert.doesNotThrow(function() {});
    });
  });

  describe('.fail()', function() {
    it('should throw an error.', function() {
      try {
        assert.fail('actual', 'expected', 'test message');
        shouldNotCall();
      } catch (e) {
        assert(e.message === 'test message');
      }
    });
  });

  function shouldNotCall() {
    throw new Error('This should not have been reached.');
  }
});
