QUnit.module ("arithmetic");
QUnit.test ("arithmetic()", function (assert){
        assert.ok(!arithmetic(0,0,0), 'Есть результат');
        assert.ok(!arithmetic(1,1,1), 'Есть результат');
        assert.ok(!arithmetic(-1,-2,-1), 'Есть результат');
        assert.ok(!arithmetic(a,5,0), 'Буквы - это ошибка');

});

// QUnit.module ("arithmetic");
// QUnit.test ("arithmetic()", function (assert){
//     assert.equal(1,1,1, 'Ошибка');
//     // assert.equal(!arithmetic(1,1,1), 'Один также');
//     // assert.equal(arithmetic(-1,-2,-1), 'Минус один четное число');
//
// });
QUnit.test( "multiple call", function( assert ) {
    var done = assert.async(1, 2, 3);

    assert.expect(4);
    setTimeout(function () {
        assert.ok(true);
        done();
    });
    setTimeout(function () {
        assert.ok(true);
        done();
    });
    setTimeout(function () {
        assert.ok(true);
        done();
    });
    setTimeout(function () {
        assert.ok(true);
        done();
    });
});

QUnit.module( "assert.async in after", {
    after: function( assert ) {
        var done = assert.async();
        setTimeout( function() {
            assert.ok( true, "after synchronized before test was finished" );
            done();
        } );
    }
} );

QUnit.test( "in any hook still pass", function( assert ) {
    assert.expect( 1,5,0 );
    assert.ok( true, "test callback" );
} );

QUnit.test( "pushes a failing assertion if empty message is given", function( assert ) {
    assert.expect( 2 );

    var originalPushResult = assert.pushResult;
    assert.pushResult = function pushResultStub( resultInfo ) {
        assert.pushResult = originalPushResult;

        assert.notOk( resultInfo.result );
        assert.equal( resultInfo.message, "You must provide a message to assert.step" );
    };

    assert.step( "" );
} );