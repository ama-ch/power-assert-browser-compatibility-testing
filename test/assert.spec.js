describe('assert', function() {
  it('should work.', function() {
    assert(true);
    assert.ok(1 === 1);
    assert.equal(1, '1');
    assert.notEqual(0, 1);
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
    assert.notDeepEqual([1, 2, 3], [1, 2, 4]);
    assert.strictEqual(1, 1);
    assert.notStrictEqual(1, '1');
    assert.throws(function() {
      throw new Error('Wrong value.');
    }, /Wrong value/);
    assert.doesNotThrow(function() {});
  });

  it('should throw error.', function() {
    try {
      assert.fail('actual', 'expected', 'test message');
      shouldNotCall();
    } catch (e) {
      assert(e.message === 'test message');
    }
  });

  function shouldNotCall() {
    throw new Error('This should not have been reached.');
  }
});
