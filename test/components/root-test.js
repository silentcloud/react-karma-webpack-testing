import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Root from '../../src/components/root';

describe('root', function () {
  it('renders without problems', () => {
    const root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toExist();
  });

  it('should change name after change', () => {
    const root = TestUtils.renderIntoDocument(<Root/>);
    const input = TestUtils.findRenderedDOMComponentWithTag(root, 'input');
    const p = TestUtils.findRenderedDOMComponentWithClass(root, 'helloP');

    TestUtils.Simulate.change(input, {
      target: {
        value: 'test'
      }
    });

    TestUtils.Simulate.keyDown(input, {
      key: "Enter",
      keyCode: 13,
      which: 13
    });

    expect(p.textContent).toBe('Hello, test');

  });

});
